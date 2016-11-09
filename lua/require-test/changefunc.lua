local Vars = require("vars");

local function change()
    Vars.hoge = "fuga";
end

return {
    change = change
};
