let fieldData = {},
    callBack = {},
    commands = !1,
    rallyPriceCommandCooldown = !1,
    creatorCoinSymbolCooldown = !1,
    creatorCoinPriceCommandCooldown = !1,
    creatorCoinCooldown = !1,
    creatorCoinTransactionsCommandCooldown = !1,
    creatorCoinSupportersCommandCooldown = !1,
    creatorCoinSupportVolumeCommandCooldown = !1,
    creatorCoinCountCommandCooldown = !1,
    coinLinkCommandCooldown = !1;

window.addEventListener("onWidgetLoad", function(o) {
    fieldData = o.detail.fieldData
});

const sayMessage = o => {
    let t = fieldData.JWTToken;
    24 === t.length && fetch(`https://api.jebaited.net/botMsg/${t}/`, {
        method: "post",
        body: JSON.stringify({
            message: o
        })
    }).catch(o => console.error("Error sending message to chat"))
};

window.addEventListener("onEventReceived", function(o) {
    const t = o.detail.listener;
    o.detail.event;

    if ("message" == t) {
        if (o.detail.event.data.text == fieldData.commands && 0 == commands && (commands = !0, sayMessage(`Rally Price: ${fieldData.rallyPriceCommand}, Creator Coin Information: ${fieldData.creatorCoin}, Creator Coin Transactions: ${fieldData.creatorCoinTransactionsCommand}, Creator Coin Supporters: ${fieldData.creatorCoinSupportersCommand}, Creator Coin Support Volume: ${fieldData.creatorCoinSupportVolumeCommand}, Creator Coin Count: ${fieldData.creatorCoinCountCommand}`), setTimeout(function() {
                commands = !1
            }, 1e3 * fieldData.commandsCooldown)), o.detail.event.data.text == fieldData.rallyPriceCommand && 0 == rallyPriceCommandCooldown) {
            rallyPriceCommandCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.coingecko.com/api/v3/coins/rally-2?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage("Rally Price: $" + String(t.market_data.current_price.usd)), setTimeout(function() {
                        rallyPriceCommandCooldown = !1
                    }, 1e3 * {
                        rallyPriceCommandCooldown: rallyPriceCommandCooldown
                    })
                }
            })
        }

        if (o.detail.event.data.text == fieldData.creatorCoinPriceCommand && 0 == creatorCoinPriceCommandCooldown) {
            creatorCoinPriceCommandCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.rally.io/v1/creator_coins/" + fieldData.creatorCoinSymbol + "/price"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage(String(t.symbol) + ": $" + t.priceInUSD.toString() + " RLY: " + t.priceInRLY.toString()), setTimeout(function() {
                        creatorCoinPriceCommandCooldown = !1
                    }, 1e3 * {
                        creatorCoinPriceCommandCooldown: creatorCoinPriceCommandCooldown
                    })
                }
            })
        }

        if (o.detail.event.data.text == fieldData.creatorCoin && 0 == creatorCoinCooldown) {
            creatorCoinCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.rally.io/v1/creator_coins/" + fieldData.creatorCoinSymbol + "/summary"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage("Supporters - " + t.totalSupporters + ", Transactions - " + t.totalTransaction + ", Support Volume - " + t.totalSupportVolume + ", Total Creator Coins - " + t.totalCoins), setTimeout(function() {
                        rallyPriceCommandCooldown = !1
                    }, 1e3 * {
                        rallyPriceCommandCooldown: rallyPriceCommandCooldown
                    })
                }
            })
        }

        if (o.detail.event.data.text == fieldData.creatorCoinSupportersCommand && 0 == creatorCoinSupportersCommandCooldown) {
            creatorCoinSupportersCommandCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.rally.io/v1/creator_coins/" + fieldData.creatorCoinSymbol + "/summary"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage("Total Supporters: " + t.totalSupporters.toString()), setTimeout(function() {
                        creatorCoinSupportersCommandCooldown = !1
                    }, 1e3 * {
                        creatorCoinSupportersCommandCooldown: creatorCoinSupportersCommandCooldown
                    })
                }
            })
        }

        if (o.detail.event.data.text == fieldData.creatorCoinSupportVolumeCommand && 0 == creatorCoinSupportVolumeCommandCooldown) {
            creatorCoinSupportVolumeCommandCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.rally.io/v1/creator_coins/" + fieldData.creatorCoinSymbol + "/summary"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage("Total Support Volume: " + t.totalSupportVolume.toString()), setTimeout(function() {
                        creatorCoinSupportVolumeCommandCooldown = !1
                    }, 1e3 * {
                        creatorCoinSupportVolumeCommandCooldown: creatorCoinSupportVolumeCommandCooldown
                    })
                }
            })
        }

        if (o.detail.event.data.text == fieldData.creatorCoinCountCommand && 0 == creatorCoinCountCommandCooldown) {
            creatorCoinCountCommandCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.rally.io/v1/creator_coins/" + fieldData.creatorCoinSymbol + "/summary"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage("Total Creator Coin Count: " + t.totalCoins.toString()), setTimeout(function() {
                        creatorCoinCountCommandCooldown = !1
                    }, 1e3 * {
                        creatorCoinCountCommandCooldown: creatorCoinCountCommandCooldown
                    })
                }
            })
        }

        if (o.detail.event.data.text == fieldData.creatorCoinTransactionsCommand && 0 == creatorCoinTransactionsCommandCooldown) {
            creatorCoinTransactionsCommandCooldown = !0;
            const o = new XMLHttpRequest;
            o.open("GET", "https://api.rally.io/v1/creator_coins/SKOT/summary"), o.send(), o.onreadystatechange = (t => {
                if (4 == o.readyState && 200 == o.status) {
                    let t = JSON.parse(o.responseText);
                    sayMessage("Total Transactions: " + t.totalTransaction.toString()), setTimeout(function() {
                        creatorCoinTransactionsCommandCooldown = !1
                    }, 1e3 * {
                        creatorCoinTransactionsCommandCooldown: creatorCoinTransactionsCommandCooldown
                    })
                }
            })
        }

        let coinLinkHelpResponse = `To generate a custom coin link, type ${fieldData.coinLinkCommand} <CoinName> <COIN/USD> <Amount> <Memo>`;
			
        if (o.detail.event.data.text.includes(fieldData.coinLinkCommand) && o.detail.event.data.text !== coinLinkHelpResponse && 0 == coinLinkCommandCooldown) {
            coinLinkCommandCooldown = !0;
            if (o.detail.event.data.text == fieldData.coinLinkCommand) {
                sayMessage(coinLinkHelpResponse), setTimeout(function() {
                    coinLinkCommandCooldown = !1
                }, 1e3 * {
                    coinLinkCommandCooldown: coinLinkCommandCooldown
                })
            } else {
                let splitEventData = o.detail.event.data.text.split(' ');
                let coinLinkArgs = splitEventData.slice(1, 4);
                coinLinkArgs.push(splitEventData.slice(4).join(' '));

                let errors = [];
        
                if (coinLinkArgs.length !== 4) {
                    sayMessage(`The number of arguments is incorrect.`), setTimeout(function() {
                        coinLinkCommandCooldown = !1
                    }, 1e3 * {
                        coinLinkCommandCooldown: coinLinkCommandCooldown
                    })
                } else {
                    const coinNameReq = new XMLHttpRequest;
                    coinNameReq.open("GET", `https://api.rally.io/v1/creator_coins/${coinLinkArgs[0]}/network_activity`), coinNameReq.send(), coinNameReq.onreadystatechange = (t => {
                        if (4 == coinNameReq.readyState && 200 == coinNameReq.status) {
                            let t = JSON.parse(coinNameReq.responseText);

                            if (t && t.length) {
                                if ((new Date() - new Date(t[0].createdDate)) / (1000 * 3600 * 24) > 7) {
                                    errors.push("invalid coin");
                                }
                            } else {
                                errors.push("invalid coin");
                            }

                            if (["COIN", "USD"].indexOf(coinLinkArgs[1]) == -1) {
                                errors.push("invalid currency type");
                            }
                                
                            if (!/^[0-9]+$/.test(coinLinkArgs[2])) {
                                errors.push("invalid amount");
                            }

                            if (errors.length) {
                                sayMessage(`Error(s): ${errors.join(', ')}`), setTimeout(function() {
                                    coinLinkCommandCooldown = !1
                                }, 1e3 * {
                                    coinLinkCommandCooldown: coinLinkCommandCooldown
                                })
                            } else {
                                sayMessage(`https://www.rally.io/creator/${coinLinkArgs[0].toUpperCase()}/?inputType=${coinLinkArgs[1]}&amount=${coinLinkArgs[2]}&note=${encodeURIComponent(coinLinkArgs[3]).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16))}`), setTimeout(function() {
                                    coinLinkCommandCooldown = !1
                                }, 1e3 * {
                                    coinLinkCommandCooldown: coinLinkCommandCooldown
                                })
                            }
                        }
                    })
                }
            }
        }
    }
});
