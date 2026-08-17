#!/usr/bin/env bash
set -euo pipefail

MYSQL_HOME="${MYSQL_HOME:-$HOME/.local/mysql}"
PROJECT_MYSQL_HOME="${PROJECT_MYSQL_HOME:-$HOME/.local/toamhoanhao-mysql}"
RUNDIR="$PROJECT_MYSQL_HOME/run"
PORT="${MYSQL_PORT:-3307}"
LABEL="com.toamhoanhao.mysql"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

if [ -f "$PLIST" ] && command -v launchctl >/dev/null 2>&1; then
  DOMAIN="gui/$(id -u)"

  if launchctl print "$DOMAIN/$LABEL" >/dev/null 2>&1; then
    launchctl bootout "$DOMAIN" "$PLIST"
    echo "MySQL local stopped."
    exit 0
  fi
fi

if [ ! -f "$RUNDIR/mysql.pid" ]; then
  echo "MySQL local pid file not found."
  exit 0
fi

PID="$(cat "$RUNDIR/mysql.pid")"

if ! kill -0 "$PID" 2>/dev/null; then
  echo "MySQL local is not running."
  exit 0
fi

"$MYSQL_HOME/bin/mysqladmin" \
  --protocol=TCP \
  -h127.0.0.1 \
  -P"$PORT" \
  -uroot \
  shutdown

echo "MySQL local stopped."
