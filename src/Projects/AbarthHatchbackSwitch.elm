module Projects.AbarthHatchbackSwitch exposing (..)

import Browser.Navigation exposing (back)
import Domain exposing (Msg, Writeup)
import Html exposing (..)
import Html.Attributes exposing (class, src, style)
import Styles exposing (centeredBlock)
import View exposing (..)


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


topStyle : List (Attribute Msg)
topStyle =
    [ style "display" "flex"
    ]


leftStyle : List (Attribute Msg)
leftStyle =
    [ style "padding" "25px"
    ]


rightStyle : List (Attribute Msg)
rightStyle =
    [ style "padding" "25px"
    ]


problemStatement : String
problemStatement =
    """
There's this little rubber/metal piece that fell out of my car's
trunk switch. That little piece falling out meant that the only way
to open the trunk was to bridge the connection between those two metal
bits with another metal bit. Not only was that super annoying, but
every once in a while someone would think I was breaking into my own
car.
"""


problem : Html Msg
problem =
    div topStyle
        [ div leftStyle [ p [] [ text problemStatement ] ]
        , div rightStyle [ img [ style "width" "300px", src "resources/abarth_hatchback_switch/problem.png" ] [] ]
        ]


backgroundInfo : String
backgroundInfo =
    """
We could potentially buy a new one... but can we fix the old one?
"""


background : Html Msg
background =
    div topStyle
        [ div leftStyle [ img [ style "width" "300px", src "resources/abarth_hatchback_switch/hatchback_switch.jpg" ] [] ]
        , div rightStyle [ p [] [ text backgroundInfo ] ]
        ]


solution : Html Msg
solution =
    div topStyle
        [ div leftStyle
            [ ol [ style "text-align" "left", style "margin" "25px" ]
                [ li [] [ text "Buy and assemble a 3D printer." ]
                , li [] [ text "Learn enough CAD to construct the basic shell + plunger design." ]
                , li [] [ text "Steal some nickel strips from a spot-welding kit." ]
                , li [] [ text "Steal the spring from a ballpoint pen - cut it in half." ]
                , li [] [ text "Assemble and test fit the part." ]
                , li [] [ text "Learn how to add tolerances to parts in CAD software." ]
                , li [] [ text "Install new design." ]
                ]
            ]
        , div rightStyle
            [ img [ style "width" "250px", src "resources/abarth_hatchback_switch/prototype.png" ] [] ]
        ]


resources : Html Msg
resources =
    div []
        [ View.linkGrid
            [ View.LinkCard "OnShape Document" cadImageUrl onShapeLink
            , View.LinkCard "STL Files" "resources/abarth_hatchback_switch/prototype_stl.png" "resources/abarth_hatchback_switch/switch_parts.stl"
            ]
        ]


content : List (Html Msg)
content =
    [ div (List.append [ style "max-width" "1000px" ] (centeredBlock "55%"))
        [ h1 [ style "text-align" "center", style "margin-top" "5%" ] [ text title ]
        , h2 [ style "text-align" "center" ] [ text "I Have A Problem" ]
        , problem
        , h2 [ style "text-align" "center" ] [ text "The Complication" ]
        , background
        , h2 [ style "text-align" "center" ] [ text "Solution" ]
        , solution
        , h2 [ style "text-align" "center" ] [ text "Resources" ]
        , resources
        ]
    ]
