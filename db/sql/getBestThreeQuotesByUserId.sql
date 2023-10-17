/* @name getBestThreeQuotesByUserId */
SELECT
    *
FROM
    "Quote" q
WHERE
    q."customerId" = :userId
ORDER BY
    price
LIMIT
    3;