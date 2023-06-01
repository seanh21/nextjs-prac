"use client"

import { ColumnDef } from "@tanstack/react-table"

export const columns = [
  {
    accessorKey: "id",
    header: "Identifier",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]
