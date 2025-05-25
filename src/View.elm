module View exposing (..)

import Domain exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Styles exposing (centeredBlock)


type alias LinkCard =
    { titleText : String
    , imageUrl : String
    , linkUrl : String
    }


linkGrid : List LinkCard -> Html Msg
linkGrid cards =
    div
        (centeredBlock "85%")
        [ div
            Styles.grid 
            (List.map
                (\card -> gridSquare card.titleText card.imageUrl card.linkUrl)
                cards
            )
        ]


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
