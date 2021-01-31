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
    creatorCoinCountCommandCooldown = !1;

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
    }
});