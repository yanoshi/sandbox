-- 以下のコマンドを実行すべし
-- $ luarocks install net --from=http://mah0x211.github.io
local Server = require("net.stream.inet").server;

local serverObj = assert( Server.new({
    host = "127.0.0.1",
    port = "11411",
    reuseaddr = true
}), "OMG");

local err = serverObj:listen();
local connectObj, len, rec;
local msg = "ok, this is server\n";

function serverLoop()
    while true do
        rec, err = connectObj:recv();

        if err then
            print( "error:", err );
        elseif not rec then
            print( "closed..." );
            return;
        else
            len, err = connectObj:send( msg );
            if err then
                print( "error:", err );
            else
                print( "client say:", rec );
            end
        end        
    end
end


if err then
    print( "error:", err );
else
    connectObj, err = serverObj:accept();

    if err then
        print( "error:", err );
    else
        serverLoop();
    end

    connectObj:close()
end
