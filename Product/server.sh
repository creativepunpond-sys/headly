#!/bin/bash

# Headly Local Development Server Manager
# Usage: ./server.sh [start|stop|restart|status]

PORT=8000
LOG_FILE="/tmp/headly-server.log"
PID_FILE="/tmp/headly-server.pid"

start_server() {
    if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
        echo "✅ Server is already running on http://localhost:$PORT"
        echo "PID: $(cat $PID_FILE)"
        return
    fi
    
    cd /Users/admin/Projects/Business/Headly/Product
    nohup python3 -m http.server $PORT > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    sleep 1
    
    if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
        echo "✅ Server started successfully on http://localhost:$PORT"
        echo "PID: $(cat $PID_FILE)"
        echo "Logs: $LOG_FILE"
        echo ""
        echo "Test URLs:"
        echo "  - Landing: http://localhost:$PORT/Landing_Page/index.html"
        echo "  - Calculator: http://localhost:$PORT/Free_Tier/calculator.html"
    else
        echo "❌ Failed to start server"
        rm -f "$PID_FILE"
    fi
}

stop_server() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            rm -f "$PID_FILE"
            echo "✅ Server stopped (PID: $PID)"
        else
            echo "⚠️  Server process not found (stale PID file)"
            rm -f "$PID_FILE"
        fi
    else
        # Try to find and kill any python server on port 8000
        pkill -f "python3 -m http.server $PORT"
        echo "✅ Cleaned up any server processes on port $PORT"
    fi
}

status_server() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if kill -0 $PID 2>/dev/null; then
            echo "✅ Server is RUNNING"
            echo "PID: $PID"
            echo "URL: http://localhost:$PORT"
            echo "Logs: $LOG_FILE"
            return 0
        else
            echo "❌ Server is NOT running (stale PID file found)"
            rm -f "$PID_FILE"
            return 1
        fi
    else
        # Check if any process is using the port
        if lsof -ti:$PORT >/dev/null 2>&1; then
            echo "⚠️  Something is running on port $PORT but not managed by this script"
            lsof -ti:$PORT | while read pid; do
                echo "  PID: $pid ($(ps -p $pid -o comm=))"
            done
            return 2
        else
            echo "❌ Server is NOT running"
            return 1
        fi
    fi
}

restart_server() {
    echo "🔄 Restarting server..."
    stop_server
    sleep 1
    start_server
}

case "$1" in
    start)
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        restart_server
        ;;
    status)
        status_server
        ;;
    *)
        echo "Headly Local Development Server"
        echo ""
        echo "Usage: ./server.sh [command]"
        echo ""
        echo "Commands:"
        echo "  start    - Start the server"
        echo "  stop     - Stop the server"
        echo "  restart  - Restart the server"
        echo "  status   - Check server status"
        echo ""
        echo "Current status:"
        status_server
        ;;
esac
