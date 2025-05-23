module Main exposing (..)

import Browser
import Browser.Navigation as Nav
import Domain exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Projects.AbarthHatchbackSwitch
import Url



-- MAIN


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- MODEL


projects : ProjectDirectory
projects =
    { external =
        [ ExternalProject "Playing Chess" "https://lichess1.org/assets/______3/flair/img/activity.lichess.webp" "https://lichess.org/@/kadenjtaylor"
        , ExternalProject "Visualizing Symbolic Manipulation" "resources/arithmetic_tree.png" "pages/arithmetic_demo"
        , ExternalProject "Making WASM Slideshows in Rust" "resources/rust_slideshow.png" "pages/slider_demo"
        , ExternalProject "Thinking About Software Clay" "pages/musings/Paper_Clay_Reality.excalidraw.svg" "pages/musings/software_doesnt_have_clay.html"
        , ExternalProject "Generating My Resume" "resources/logo_resumaker.png" "https://github.com/kadenjtaylor/resumaker"
        ]
    , writeups = [ Projects.AbarthHatchbackSwitch.project ]
    }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    -- flags
    ( Model key url projects, Cmd.none )



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    -- Here's the issue - if we click an "internal link" to "/pages/*", we actually wanna do a load like it's external
                    -- Because even though it's all deployed in the same directory, we want the github pages server logic to handle these ones
                    if String.startsWith "/pages/" url.path then
                        ( model, Nav.load (Url.toString url) )

                    else
                        ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW
-- writeupLookup : List Writeup -> String -> Maybe Writeup
-- writeupLookup ps path =
--     let thingToCompare = path
--     List.filter (\p -> p.url.path == String.concat [ "/", path ]) ps
--         |> List.head


view : Model -> Browser.Document Msg
view model =
    let
        targetWriteup =
            List.head
                (List.filter
                    (\w -> w.url == model.url.path)
                    model.projects.writeups
                )
    in
    case targetWriteup of
        Just w ->
            { title = w.title
            , body = w.content
            }

        Nothing ->
            case model.url.path of
                "/" ->
                    { title = "Kaden.DEV"
                    , body = homePage model
                    }

                _ ->
                    { title = "NOT FOUND"
                    , body = notFoundPage model
                    }


linkBar : Html Msg
linkBar =
    div [ style "margin" "10px", style "position" "absolute", style "right" "5%" ]
        [ a [ href "mailto:kadenjtaylor@gmail.com" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_email.png", alt "Email Me", title "Email Me" ] [] ]
        , a [ href "https://www.linkedin.com/in/kaden-taylor/" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_linkedin.png", alt "LinkedIn", title "Linkedin" ] [] ]
        , a [ href "https://github.com/kadenjtaylor" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_github.png", alt "GitHub", title "Github" ] [] ]
        , a [ href "https://github.com/kadenjtaylor/resumaker/raw/main/latex/kaden_taylor_resume.pdf" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_resume.png", alt "Resume", title "Resume" ] [] ]
        ]


header : Html Msg
header =
    div
        [ id "header"
        , style "display" "flex"
        , style "justify-content" "space-between"
        ]
        [ div
            [ id "title-card"
            ]
            [ div [ style "width" "100%", style "overflow" "hidden", style "display" "flex" ]
                [ div [ style "width" "29%" ]
                    [ img
                        [ class "rcorners"
                        , src "resources/headshot.jpg"
                        , alt "Kaden's Face"
                        , style "width" "200px"
                        , style "height" "200px"
                        , title "Kaden's Face"
                        ]
                        []
                    ]
                , div [ style "width" "30%", style "margin-top" "auto" ] [ h1 [] [ text "Kaden.DEV" ] ]
                , linkBar
                ]
            , span []
                [ text "I like building things, solving problems, and building things that solve problems." ]
            ]
        ]


presentBlurb : String
presentBlurb =
    """I love domain modeling, functional programming, and making code understandable.
I'm on the more extroverted side for a software developer, and I LOVE getting a chance to design
systems that are meant to be understood and upgraded, not patched into oblivion and thrown away
when the weight of all the lost system knowledge becomes too heavy. Recently I've been doing a ton
of CAD and 3d printing, and that's been a wonderful creative outlet to hone my prototyping skills.
Right now I'm looking for work that lets me feel really useful - shoot me an email if you think I
might be a good fit for a project you know about!
"""


futureBlurb : String
futureBlurb =
    """
I'm slowly but surely working my way towards a visual programming interface that I hope will help to
democratize the manipulation of software. The main ideas have been motiviated equally by the specific
struggles of people I've seen trying to build/modify/explain/understand software over the last decade
or so, along with some general ideas about pattern and structure that come from reading G.E.B., watching
the Iron Man movies, and taking long walks to think about the ideal way to describe machines made from
pure information."""


blurbStyles : List (Attribute Msg)
blurbStyles =
    [ style "padding" "20px"
    , style "margin" "30px"
    , style "border" "1px solid #333"
    , style "border-radius" "20px"
    , style "box-shadow" "2px 4px 5px rgba(0, 0, 0, 0.5)"
    , style "background-color" "#e6e6e6"
    ]


about : Html Msg
about =
    div
        [ class "centered-container", style "max-width" "80%", style "margin" "auto" ]
        [ h2 []
            [ text "Here's what I'm about:" ]
        , div [ class "blurbs" ]
            [ div blurbStyles
                [ h3 []
                    [ text "Present:" ]
                , span
                    []
                    [ text presentBlurb ]
                ]
            , div blurbStyles
                [ h3 []
                    [ text "Future:" ]
                , span
                    []
                    [ text futureBlurb ]
                ]
            ]
        ]


projectGrid : ProjectDirectory -> Html Msg
projectGrid ps =
    let
        externalSquares =
            List.map gridSquareExternal ps.external

        writeupSquares =
            List.map gridSquareWriteup ps.writeups
    in
    div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here's some stuff I'm doing:" ]
        , div
            [ style "width" "85%"
            ]
            [ div
                [ class "grid" ]
                (externalSquares ++ writeupSquares)
            ]
        ]


gridSquareExternal : ExternalProject -> Html Msg
gridSquareExternal proj =
    div
        [ class "square"
        ]
        [ a [ style "width" "100%", style "height" "100%", style "padding" "10px", href proj.url ]
            [ img
                [ src proj.imgUrl
                , alt proj.title
                ]
                []
            , p
                [ class "title" ]
                [ text proj.title ]
            ]
        ]


gridSquareWriteup : Writeup -> Html Msg
gridSquareWriteup w =
    div
        [ class "square"
        ]
        [ a [ style "width" "100%", style "height" "100%", style "padding" "10px", style "text-decoration" "none", style "text-decoration" "none", href w.url ]
            [ img
                [ src w.imgUrl
                , alt w.title
                ]
                []
            , p
                [ class "title" ]
                [ text w.title ]
            ]
        ]


homePage : Model -> List (Html Msg)
homePage model =
    [ header
    , about
    , projectGrid model.projects
    ]


notFoundPage : Model -> List (Html Msg)
notFoundPage model =
    [ div [ class "centered-container" ]
        [ br []
            []
        , br []
            []
        , h1 []
            [ text "404 Page Not Found" ]
        , p []
            [ text (Url.toString model.url) ]
        ]
    ]
