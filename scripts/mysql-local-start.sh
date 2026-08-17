#!/usr/bin/env bash
set -euo pipefail

MYSQL_HOME="${MYSQL_HOME:-$HOME/.local/mysql}"
PROJECT_MYSQL_HOME="${PROJECT_MYSQL_HOME:-$HOME/.local/toamhoanhao-mysql}"
DATADIR="$PROJECT_MYSQL_HOME/data"
RUNDIR="$PROJECT_MYSQL_HOME/run"
PORT="${MYSQL_PORT:-3307}"
LABEL="com.toamhoanhao.mysql"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

mkdir -p "$DATADIR" "$RUNDIR"

if [ ! -d "$DATADIR/mysql" ]; then
  "$MYSQL_HOME/bin/mysqld" \
    --no-defaults \
    --initialize-insecure \
    --basedir="$MYSQL_HOME" \
    --datadir="$DATADIR" \
    --innodb-undo-directory="$DATADIR"
fi

if [ -f "$RUNDIR/mysql.pid" ] && kill -0 "$(cat "$RUNDIR/mysql.pid")" 2>/dev/null; then
  echo "MySQL local is already running on port $PORT"
  exit 0
fi

if [ -f "$PLIST" ] && command -v launchctl >/dev/null 2>&1; then
  DOMAIN="gui/$(id -u)"

  if launchctl print "$DOMAIN/$LABEL" >/dev/null 2>&1; then
    launchctl kickstart -k "$DOMAIN/$LABEL"
  else
    launchctl bootstrap "$DOMAIN" "$PLIST"
  fi

  echo "MySQL local starting on port $PORT via launchctl"
  echo "Log: $RUNDIR/mysql.log"
  exit 0
fi

nohup "$MYSQL_HOME/bin/mysqld" \
  --no-defaults \
  --basedir="$MYSQL_HOME" \
  --datadir="$DATADIR" \
  --innodb-undo-directory="$DATADIR" \
  --port="$PORT" \
  --socket="$RUNDIR/mysql.sock" \
  --pid-file="$RUNDIR/mysql.pid" \
  --log-error="$RUNDIR/mysql.log" \
  --mysqlx=0 \
  --bind-address=127.0.0.1 \
  >/dev/null 2>&1 &

echo "MySQL local starting on port $PORT"
echo "Log: $RUNDIR/mysql.log"
