module Projects.AbarthHatchbackSwitch exposing (..)

import Domain exposing (Writeup)
import Html exposing (..)
import Html.Attributes exposing (class)


project : Writeup
project =
    Writeup "Abarth Hatchback Switch" "abarth-hatchback-switch" [ div [ class "centered-container" ] [ text "It works!" ] ]
