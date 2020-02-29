CREATE TABLE public."Users"
(
    age bigint,
    id bigint NOT NULL,
    login VARCHAR (255),
    password VARCHAR (255),
    "isDeleted" boolean,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id)
)

INSERT INTO public."Users"(id, login, password, age, "isDeleted")
VALUES
   (1, 'user1', 'pass1', 10, false),
   (2, 'user2', 'pass2', 11, false),
   (3, 'user3', 'pass3', 33, false),
   (4, 'user3', 'pass3', 70, false),
   (5, 'user3', 'pass3', 12, true),
   (6, 'user3', 'pass3', 10, false);