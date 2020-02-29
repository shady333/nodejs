CREATE TABLE public."Users"
(
    age bigint,
    id bigint NOT NULL,
    login "char"[],
    password "char"[],
    "isDeleted" boolean,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id)
)