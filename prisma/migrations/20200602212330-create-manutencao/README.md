# Migration `20200602212330-create-manutencao`

This migration has been generated by guilhermeulbriki at 6/2/2020, 9:23:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Manutencao" (
"date" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"description" text  NOT NULL ,"id" SERIAL,"utilityCounter" integer  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200602173225-create-erros..20200602212330-create-manutencao
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
@@ -28,4 +28,11 @@
   date DateTime @default(now())
   description String
   code String
 }
+
+model Manutencao {
+  id  Int @default(autoincrement()) @id
+  date DateTime @default(now())
+  description String
+  utilityCounter Int
+}
```


