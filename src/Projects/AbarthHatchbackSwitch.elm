module Projects.AbarthHatchbackSwitch exposing (..)

import Domain exposing (Msg, Writeup)
import Html exposing (..)
import Html.Attributes exposing (class)


title : String
title =
    "Making a New Abarth Hatchback Switch"


linkUrl : String
linkUrl =
    "/abarth-hatchback-switch"


imageUrl : String
imageUrl =
    "resources/logo_abarth.jpg"


project : Writeup
project =
    Writeup title linkUrl imageUrl content


content : List (Html Msg)
content =
    [ div [ class "centered-container" ] [ h1 [] [ text title ], span [] [ text "Coming Soon!" ] ] ]
