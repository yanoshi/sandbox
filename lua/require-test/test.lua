local Vars = require("vars");
local Changefunc = require("changefunc");

package.path=package.path..';./?.lua';

print( Vars.hoge );
print( "Do Change" );

Changefunc.change();

print( Vars.hoge );
