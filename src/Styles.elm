module Styles exposing (..)

import Domain exposing (Msg)
import Html exposing (Attribute)
import Html.Attributes exposing (style)


centeredBlock : String -> List (Attribute Msg)
centeredBlock width =
    [ style "width" width
    , style "margin" "auto"
    ]
