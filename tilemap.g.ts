// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030000000000000000000003000000000000000303030303030300030003000000030000000000000003000300030000030303000303030300030003000303000003030000030303000300030003000000000000030303030003000300030003000303000000000000000000000300000003030303030303030300030303030000000000030000000300000000000000030303000300030003030303030303000000000003000300030003000000030000030000030003000000030003000300000300030303030303000300030003000003000000000000000003000300000002030303030303030303030303030301`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 . 2 . 2 . . 
. 2 . . . . . . . 2 . 2 . 2 . . 
2 2 2 . 2 2 2 2 . 2 . 2 . 2 2 . 
. 2 2 . . 2 2 2 . 2 . 2 . 2 . . 
. . . . 2 2 2 2 . 2 . 2 . 2 . 2 
. 2 2 . . . . . . . . . . 2 . . 
. 2 2 2 2 2 2 2 2 2 . 2 2 2 2 . 
. . . . 2 . . . 2 . . . . . . . 
2 2 2 . 2 . 2 . 2 2 2 2 2 2 2 . 
. . . . 2 . 2 . 2 . 2 . . . 2 . 
. 2 . . 2 . 2 . . . 2 . 2 . 2 . 
. 2 . 2 2 2 2 2 2 . 2 . 2 . 2 . 
. 2 . . . . . . . . 2 . 2 . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,sprites.builtin.field0,sprites.builtin.field1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
