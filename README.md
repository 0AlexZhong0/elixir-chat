## Prerequisites

- Postgresql

## Overview

- the `chat_server` directory is bootstrapped with the command `mix phx.new chat_server --no-html --no-webpack`

## Development

- When a schema is added or created, you need to run a migration to reflect the changes, the following operations are needed.

```bash
mix ecto.gen.migration <migration_operation_name>
# a .exs file is generated in priv/repo/migrations/<prefix>.exs
# after editing the new file, run
mix ecto.migrate
# to rollback the migration, run
mix ecto.rollback
```
