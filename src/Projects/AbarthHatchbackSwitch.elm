module Projects.AbarthHatchbackSwitch exposing (..)

import Domain exposing (Msg, Writeup)
import Html exposing (..)
import Html.Attributes exposing (class, src, style)
import View exposing (gridSquare)


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


onShapeLink : String
onShapeLink =
    "https://cad.onshape.com/documents/b8da71bf08e5c9d46fb181f8/w/20624b93d096747d7f377128/e/3bde4f35106b4f1591af2967"


cadImageUrl : String
cadImageUrl =
    "resources/abarth_hatchback_switch/cad_image.png"


onShapeGridSquare : Html Msg
onShapeGridSquare =
    gridSquare "OnShape Document" cadImageUrl onShapeLink


topStyle : List (Attribute Msg)
topStyle =
    [ style "background-color" "purple"
    , style "display" "flex"
    ]


leftStyle : List (Attribute Msg)
leftStyle =
    [ style "background-color" "lightblue"
    , style "padding" "25px"
    ]


rightStyle : List (Attribute Msg)
rightStyle =
    [ style "background-color" "salmon"
    , style "padding" "25px"
    ]


problemStatement : String
problemStatement =
    """
There's this little rubber/metal piece that fell out of my car's
trunk switch. That little piece falling out meant that the only way
to open the trunk was to bridge the connection between those two metal
bits with another metal bit. Apparently, you can't buy just this
missing bit, you have to buy the larger assembly. That's dumb.
"""


problem : Html Msg
problem =
    div topStyle
        [ div leftStyle [ p [] [ text problemStatement ] ]
        , div rightStyle [ img [ src "resources/abarth_hatchback_switch/cad_image.png" ] [] ]
        ]


solution : Html Msg
solution =
    div topStyle
        [ div leftStyle [ img [ src "resources/abarth_hatchback_switch/cad_image.png" ] [] ]
        , div rightStyle
            [ ol [ style "text-align" "left" ]
                [ li [] [ text "Buy and assemble a 3D printer." ]
                , li [] [ text "Learn enough CAD to construct the basic shell + plunger design." ]
                , li [] [ text "Steal some nickel strips from a spot-welding kit." ]
                , li [] [ text "Steal the spring from a ballpoint pen - cut it in half." ]
                , li [] [ text "Assemble and test fit the part." ]
                , li [] [ text "Learn how to add tolerances to parts in CAD software." ]
                , li [] [ text "Install new design." ]
                ]
            ]
        ]


story : Html Msg
story =
    div []
        [ h2 [] [ text "I Have A Problem" ]
        , problem
        , h2 [] [ text "Solution" ]
        , solution
        ]


resources : Html Msg
resources =
    div []
        [ h2 [] [ text "Resources" ]
        , onShapeGridSquare
        ]


content : List (Html Msg)
content =
    [ div [ class "centered-container", style "max-width" "80%", style "margin" "auto" ] [ h1 [] [ text title ], story, resources ] ]
