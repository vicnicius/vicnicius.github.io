module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, href)

main =
  Html.beginnerProgram { model = model, view = view, update = update }

type alias Model = Int

model : Model
model = 0


type Msg = Any

update : Msg -> Model -> Model

update msg model =
  case msg of
    any -> model

view : Model -> Html msg
view model =
    div []
        [ h1 [ class "hello" ] [ text "World!" ] ]
