package com.elina.tradesurveillance.service;

import com.elina.tradesurveillance.model.Alert;
import com.elina.tradesurveillance.model.Trade;
import com.elina.tradesurveillance.repository.AlertRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class TradeSurveillanceService {

    private final AlertRepository alertRepository;

    public TradeSurveillanceService(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    public void analyzeTrade(Trade trade) {
        if (trade.getQuantity() > 1000) {
            System.out.println("ALERT: Large trade detected for " + trade.getSymbol());
        }

        if (trade.getIpAddress().startsWith("10.")) {
            Alert alert = new Alert();
            alert.setAccountId(trade.getAccountId());
            alert.setAlertType("SUSPICIOUS_IP");
            alert.setSeverity("MEDIUM");
            alert.setMessage("Suspicious internal IP detected: " + trade.getIpAddress());
            alert.setCreatedAt(LocalDateTime.now());
            alertRepository.save(alert);

            System.out.println("ALERT: Suspicious IP detected");
        }

        if (trade.getQuantity() > 1000) {

            Alert alert = new Alert();

            alert.setAccountId(trade.getAccountId());
            alert.setAlertType("ABNORMAL_TRADE_VOLUME");
            alert.setSeverity("HIGH");
            alert.setMessage("Trade quantity exceeded threshold: " + trade.getQuantity());
            alert.setCreatedAt(LocalDateTime.now());

            alertRepository.save(alert);

            System.out.println("ALERT: Large trade detected for " + trade.getSymbol());
        }
    }

}