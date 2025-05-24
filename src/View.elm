module View exposing (..)

import Domain exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)


type alias LinkCard =
    { titleText : String
    , imageUrl : String
    , linkUrl : String
    }


linkGrid : List LinkCard -> Html Msg
linkGrid cards =
    div
        [style "width" "85%"
        , style "margin" "auto"
        ]
        [ div
            [ class "grid" ]
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
