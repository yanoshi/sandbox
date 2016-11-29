-- assign to local
local unpack = unpack or table.unpack;
local writelog = require('writelog');   -- https://github.com/mah0x211/lua-writelog

-- const
local SP = ' ';
local OPENBOX = '␣';    -- U+2423   
local ERROR = 0;
local WARNING = 1;
local NOTICE = 2;
local VERBOSE = 3;
local DEBUG = 4;
local LOCATION_FMT = '%s:%d';
local LOG_LEVEL_NAME = {
    [ERROR]   = 'error',
    [WARNING] = 'warn',
    [NOTICE]  = 'notice',
    [VERBOSE] = 'verbose',
    [DEBUG]   = 'debug'
};
local LOG_LEVEL_FMT = {
    [ERROR]   = ('[%s]'):format( LOG_LEVEL_NAME[ERROR] ),
    [WARNING] = ('[%s]'):format( LOG_LEVEL_NAME[WARNING] ),
    [NOTICE]  = ('[%s]'):format( LOG_LEVEL_NAME[NOTICE] ),
    [VERBOSE] = ('[%s]'):format( LOG_LEVEL_NAME[VERBOSE] ),
    [DEBUG]   = ('[%s:%s]'):format( LOG_LEVEL_NAME[DEBUG], LOCATION_FMT )
};

-- protocol format for telnet protocol of OpenTSDB 
local FORMAT = {
    'put ',
    'log.test ',
    -- FORMAT[3] := TIMESTAMP
    'TIMESTAMP', ' ',
    -- FORMAT[5] := VALUE
    'VALUE', ' ',
    -- FORMAT[8] := HOSTNAME
    'host=', 'HOSTNAME', ' ',
    -- FORMAT[11] := LOG_LEVEL
    'log_level=', 'LOG_LEVEL', ' ',
    -- FORMAT[14] := LOG
    'log=', 'LOG', '\r\n'
}

local logger;

local function formatter( lv, info, ... )
    local logStr = LOG_LEVEL_FMT[lv]:format(
       info.short_src, info.currentline
    );

    logStr = logStr .. table.concat( writelog.tostrv( ... ), OPENBOX ):gsub( SP, OPENBOX );

    FORMAT[3] = tostring( os.time() );
    FORMAT[5] = 1;
    FORMAT[8] = 'localhost';
    FORMAT[11] = lv;
    FORMAT[14] = logStr;

    return table.concat( FORMAT, '' );
end

logger = writelog.new( writelog.DEBUG, 'tcp://128.199.143.156:4242', { formatter = formatter } );

local args = {
    'hello',
    0,
    1,
    -1,
    1.2,
    'world',
    {
        foo = 'bar',
        baz = {
            x = {
                y = 'z'
            }
        }
    },
    true,
    function()end,
    coroutine.create(function()end)
};

logger:warn( unpack( args ) )
logger:notice( unpack( args ) )
logger:verbose( unpack( args ) )
logger:debug( unpack( args ) )
logger:close();

