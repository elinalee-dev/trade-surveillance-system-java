package com.elina.tradesurveillance.service;

import com.elina.tradesurveillance.model.Alert;
import com.elina.tradesurveillance.model.Trade;
import com.elina.tradesurveillance.repository.AlertRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class TradeSurveillanceService {

    private final AlertRepository alertRepository;

    private static final int QUANTITY_THRESHOLD = 1000;
    private static final double HIGH_VALUE_TRADE_THRESHOLD = 1_000_000.00;
    private static final String SUSPICIOUS_IP_PREFIX = "10.";

    public void analyzeTrade(Trade trade) {
        if (trade == null) return;

        double tradeValue = trade.getQuantity() * trade.getPrice();

        if (tradeValue >= HIGH_VALUE_TRADE_THRESHOLD) {
            save(trade, "POTENTIAL_MARKET_MANIPULATION", "CRITICAL",
                    "Extremely large high-value trade detected");
        }

        if (trade.getQuantity() >= QUANTITY_THRESHOLD) {
            save(trade, "ABNORMAL_TRADE_VOLUME", "HIGH",
                    "Trade quantity exceeded threshold: " + trade.getQuantity());
        }

        if (trade.getIpAddress() != null &&
                trade.getIpAddress().startsWith(SUSPICIOUS_IP_PREFIX)) {

            save(trade, "SUSPICIOUS_IP", "MEDIUM",
                    "Suspicious internal IP detected: " + trade.getIpAddress());
        }
    }

    private void save(Trade trade, String type, String severity, String message) {

        alertRepository.save(Alert.builder()
                .accountId(trade.getAccountId())
                .alertType(type)
                .severity(severity)
                .message(message)
                .createdAt(LocalDateTime.now())
                .build());

        log.warn("Alert [{}]: {}", type, message);
    }
}
