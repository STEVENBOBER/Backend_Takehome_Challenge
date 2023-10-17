/* @name insertQuote */
INSERT INTO
    "Quote" ("provider", "price", "customerId")
VALUES
    (:provider, :price, :customerId) RETURNING *;