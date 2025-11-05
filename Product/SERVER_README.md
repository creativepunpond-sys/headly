# 🌐 Headly Local Development Server

## Quick Start

The server script makes it easy to manage your local development server:

```bash
cd /Users/admin/Projects/Business/Headly/Product
./server.sh start
```

## Commands

| Command | Description |
|---------|-------------|
| `./server.sh start` | Start the server |
| `./server.sh stop` | Stop the server |
| `./server.sh restart` | Restart the server |
| `./server.sh status` | Check if server is running |
| `./server.sh` | Show help and current status |

## Test URLs

Once the server is running:

- **Landing Page**: http://localhost:8000/Landing_Page/index.html
- **Free Calculator**: http://localhost:8000/Free_Tier/calculator.html
- **Pro Calculator**: http://localhost:8000/Pro_Tier/calculator.html
- **Pro Max Calculator**: http://localhost:8000/Pro_Max_Tier/calculator.html

## Troubleshooting

### Server won't start (Port already in use)

If you see "Address already in use":

```bash
# Kill any process on port 8000
lsof -ti:8000 | xargs kill -9

# Then restart
./server.sh start
```

### Server keeps stopping

The server runs in the background using `nohup`. It should keep running even if you close your terminal. However, if your Mac restarts or sleeps for a long time, you may need to restart it manually.

To automatically start the server on login, add this to `~/.zshrc`:

```bash
# Auto-start Headly dev server (optional)
alias headly-server="cd /Users/admin/Projects/Business/Headly/Product && ./server.sh"
```

Then run `headly-server start` from anywhere.

### Check logs

If something isn't working:

```bash
tail -f /tmp/headly-server.log
```

## Why use this script?

**Before:**
- Hard to remember the command
- No way to check if server is running
- Port conflicts are confusing
- Manual cleanup needed

**After:**
- Simple commands: `start`, `stop`, `status`
- Automatic PID tracking
- Cleans up port conflicts
- Shows helpful URLs
- Persistent across terminal sessions

## Server Details

- **Port**: 8000
- **Process**: Python 3 HTTP server
- **Working Directory**: `/Users/admin/Projects/Business/Headly/Product`
- **PID File**: `/tmp/headly-server.pid`
- **Log File**: `/tmp/headly-server.log`

## Production Deployment

This local server is for **development only**. For production:

1. Deploy to Vercel, Netlify, or GitHub Pages
2. See `DEPLOYMENT_GUIDE.md` for instructions
3. Never use `python -m http.server` in production

---

**Created**: November 5, 2025
**Version**: 1.0
