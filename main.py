@namespace
class MultiplayerState:
    score2 = MultiplayerState.create()

def on_overlap_tile(sprite, location):
    
    def on_throttle():
        global kcp
        kcp += 1
    timer.throttle("action", 1000, on_throttle)
    
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_a_pressed():
    Render.move_with_controller(7, 0, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_a_released():
    Render.move_with_controller(5, 2, 0)
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

mySprite = Render.get_render_sprite_variable()
tiles.place_on_tile(Render.get_render_sprite_instance(),
    tiles.get_tile_location(5, 15))
scene.camera_follow_sprite(mySprite)
scene.set_background_color(2)
tiles.set_current_tilemap(tilemap("""
    level3
"""))
Render.set_view_angle_in_degree(-90)
info.set_score(0)
kcp = 0
lap = 0
myCounter = sevenseg.create_counter(SegmentStyle.THICK, SegmentScale.HALF, 5)
myCounter.count = 0
Render.move_with_controller(5, 2, 0)

def on_update_interval():
    info.change_score_by(1)
game.on_update_interval(10, on_update_interval)

def on_forever():
    global lap, kcp
    if mySprite.tile_kind_at(TileDirection.CENTER, assets.tile("""
        myTile2
    """)):
        if kcp == 1:
            myCounter.count += 1
            lap += 1
            pause(1000)
            kcp = 0
    if lap == 3:
        game.game_over(True)
forever(on_forever)
