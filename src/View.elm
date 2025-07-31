module View exposing (..)

import Domain exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import Styles exposing (centeredBlock)


type alias LinkCard =
    { titleText : String
    , imageUrl : String
    , linkUrl : String
    , isDownload : Bool
    }


linkGrid : List LinkCard -> Html Msg
linkGrid cards =
    div
        (centeredBlock "85%")
        [ div
            Styles.grid
            (List.map
                (\card -> gridSquare card.titleText card.imageUrl card.linkUrl card.isDownload)
                cards
            )
        ]


maybeDownload : Bool -> List (Html.Attribute msg)
maybeDownload isDownload =
    if isDownload then
        [ download "" ]

    else
        []


gridSquare : String -> String -> String -> Bool -> Html Msg
gridSquare squareTitle imageUrl linkUrl isDownload =
    div
        [ class "square"
        ]
        [ a
            ([ style "width" "100%", style "height" "100%", style "padding" "10px", href linkUrl ]
                ++ maybeDownload isDownload
            )
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
