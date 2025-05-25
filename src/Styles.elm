module Styles exposing (..)

import Domain exposing (Msg)
import Html exposing (Attribute)
import Html.Attributes exposing (style)

-- I like the idea of tying the classes in the styles.css file to explicit calls in this file
-- that way I have a way to keep track of which elements of the styles.css file are being used where 
-- but I think the way I might wanna do that enventually involves abstracting the classes away entirely
-- and just having custom elements which are just classed-up divs

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
