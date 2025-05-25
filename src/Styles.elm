module Styles exposing (..)

import Domain exposing (Msg)
import Html exposing (Attribute)
import Html.Attributes exposing (style)


centeredBlock : String -> List (Attribute Msg)
centeredBlock width =
    [ style "width" width
    , style "margin" "auto"
    ]


grid : List (Attribute Msg)
grid =
    [ style "display" "grid"
    , style "grid-template-columns" "repeat(auto-fit, minmax(300px, 1fr))"
    , style "grid-gap" "5px"
    ]
