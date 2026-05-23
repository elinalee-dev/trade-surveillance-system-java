package com.elina.tradesurveillance.controller;

import com.elina.tradesurveillance.model.Trade;
import com.elina.tradesurveillance.repository.TradeRepository;
import com.elina.tradesurveillance.service.TradeSurveillanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/trades")
public class TradeController {

    @Autowired
    private TradeRepository tradeRepository;

    @Autowired
    private TradeSurveillanceService surveillanceService;

    @PostMapping
    public Trade createTrade(@RequestBody Trade trade) {
        surveillanceService.analyzeTrade(trade);
        return tradeRepository.save(trade);
    }

    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }
}