module View exposing (..)

import Domain exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)


gridSquare : String -> String -> String -> Html Msg
gridSquare squareTitle imageUrl linkUrl =
    div
        [ class "square"
        ]
        [ a [ style "width" "100%", style "height" "100%", style "padding" "10px", href linkUrl ]
            [ img
                [ src imageUrl
                , alt squareTitle
                ]
                []
            , p
                [ class "title" ]
                [ text squareTitle ]
            ]
        ]
