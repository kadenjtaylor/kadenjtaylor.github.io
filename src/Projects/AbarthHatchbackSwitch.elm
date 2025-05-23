module Projects.AbarthHatchbackSwitch exposing (..)

import Domain exposing (Msg, Writeup)
import Html exposing (..)
import Html.Attributes exposing (class)


project : Writeup
project =
    Writeup "Abarth Hatchback Switch" "/abarth-hatchback-switch" "resources/logo_abarth.jpg" content


content : List (Html Msg)
content =
    [ div [ class "centered-container" ] [ text "Coming soon!" ] ]
