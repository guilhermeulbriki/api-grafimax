# Migration `20200608115328-testing-uuid`

This migration has been generated by guilhermeulbriki at 6/8/2020, 11:53:28 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Toner" (
"color" text  NOT NULL ,"copies" integer  NOT NULL ,"date" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"id" SERIAL,"utilityCounter" integer  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Erros" (
"code" text  NOT NULL ,"date" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"description" text  NOT NULL ,"id" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Manutencao" (
"date" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"description" text  NOT NULL ,"id" SERIAL,"utilityCounter" integer  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200603190936-create-user-token..20200608115328-testing-uuid
--- datamodel.dml
+++ datamodel.dml
@@ -1,8 +1,8 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -23,9 +23,9 @@
   date  DateTime  @default(now())
 }
 model Erros {
-  id  Int @default(autoincrement()) @id
+  id  String @default(uuid()) @id
   date DateTime @default(now())
   description String
   code String
 }
```


