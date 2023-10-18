/* @name insertUser */
INSERT INTO "User"(
    "name",
    "age",
    "carModel",
    "drivingExperienceYears"
)
VALUES (
    :name,
    :age,
    :carModel,
    :drivingExperienceYears    
)
RETURNING *;
