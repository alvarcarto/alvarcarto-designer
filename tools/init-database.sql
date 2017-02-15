CREATE USER alvar WITH PASSWORD 'alvar';
CREATE DATABASE alvar_order lc_collate 'en_US.UTF-8' lc_ctype 'en_US.UTF-8' encoding 'UTF8' template template0;
GRANT ALL PRIVILEGES ON DATABASE alvar_order to alvar;
CREATE DATABASE alvar_order_test lc_collate 'en_US.UTF-8' lc_ctype 'en_US.UTF-8' encoding 'UTF8' template template0;
GRANT ALL PRIVILEGES ON DATABASE alvar_order_test to alvar;