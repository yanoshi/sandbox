-- 以下のコマンドを実行すべし
-- $ luarocks install net --from=http://mah0x211.github.io
local Client = require("net.stream.inet").client;

local clientObj = assert( Client.new({
    host = "127.0.0.1",
    port = "11411"
}), "OMG!" );

local msg = "hello, this is client.\n";

local len, err = clientObj:send( msg );

if err then
    print( "error:", err );
elseif not len then
    print( "closed..." );
else 
    msg, err = clientObj:recv();
    if err then
        print( "error:", err );
    elseif not msg then
        print( "closed..." );
    else
        print( "server say:", msg );
    end
end

clientObj:close();
