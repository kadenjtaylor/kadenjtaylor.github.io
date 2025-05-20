module Main exposing (..)

import Browser
import Browser.Navigation as Nav
import Domain exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
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


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key =
    -- flags
    ( Model key url, Cmd.none )



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
                        -- In THIS case, we can do whatever we want in elm
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


view : Model -> Browser.Document Msg
view model =
    case model.url.path of
        "/" ->
            { title = "Kaden.DEV"
            , body = homePage model
            }

        "/stable-test-link" ->
            { title = "Stable Test Link"
            , body = [ testLink model ]
            }

        _ ->
            { title = "NOT FOUND"
            , body = notFoundPage model
            }


testLink : Model -> Html Msg
testLink model =
    div []
        [ br []
            []
        , br []
            []
        , h1 []
            [ text (Url.toString model.url) ]
        , p []
            [ text "You should be able to link to this, even though it doesn't exist until you ask for it" ]
        ]


linkBar : Html Msg
linkBar =
    div [ style "margin" "10px", style "position" "absolute", style "right" "5%" ]
        [ a [ href "mailto:kadenjtaylor@gmail.com"] [img [style "margin-right" "20px", style "width" "40px", src "resources/logo_email.png", alt "Email Me", title "Email Me"] []]
        , a [ href "https://www.linkedin.com/in/kaden-taylor/" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_linkedin.png", alt "LinkedIn", title "Linkedin"] [] ]
        , a [ href "https://github.com/kadenjtaylor" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_github.png", alt "GitHub", title "Github"] [] ]
        , a [ href "https://github.com/kadenjtaylor/resumaker/raw/main/latex/kaden_taylor_resume.pdf" ] [ img [ style "margin-right" "20px", style "width" "40px", src "resources/logo_resume.png", alt "Resume", title "Resume" ] [] ]
        ]


kadenFaceImage : Html Msg
kadenFaceImage =
    img
        [ class "rcorners"
        , src "resources/headshot.jpg"
        , alt "Kaden's Face"
        , style "width" "175px"
        , style "height" "175px"
        , title "Kaden's Face"]
        []


nameAndLinks : Html Msg
nameAndLinks =
    div [ style "width" "100%", style "overflow" "hidden", style "display" "flex" ]
        [ div [ style "width" "29%" ]
            [ kadenFaceImage ]
        , div [ style "width" "30%", style "margin-top" "auto" ] [ h1 [] [ text "Kaden.DEV" ] ]
        , linkBar
        ]


header : Model -> Html Msg
header _ =
    div
        [ id "header"
        , style "display" "flex"
        , style "justify-content" "space-between"
        ]
        [ div
            [ id "title-card"
            ]
            [ nameAndLinks
            , span []
                [ text "I like building things, solving problems, and building things that solve problems." ]
            ]
        ]


about : Html Msg
about =
    div
        [ class "centered-container" ]
        [ h2 []
            [ text "Here's what I'm about:" ]
        , span
            [ id "blurb"
            ]
            [ text " I love domain modeling, functional programming, and making code understandable. I'm on the more extroverted side for a software developer, and I really like getting the chance to understand a domain well enough to explain it to anyone. I believe in collaborating to create the right solution the first time. Recently I've been working in Scala, and that's been an absolute blast. " ]
        , br []
            []
        ]


projects : Model -> Html Msg
projects model =
    div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here's some stuff I'm doing:" ]
        , projectGrid model
        ]


gridSquare : String -> String -> String -> Html Msg
gridSquare squareText imgUrl destinationUrl =
    div
        [ class "square"
        , onClick (LinkClicked (Browser.External destinationUrl))
        ]
        [ img
            [ src imgUrl
            , alt squareText
            ]
            []
        , p
            [ class "title"
            ]
            [ text squareText ]
        ]


projectGrid : Model -> Html Msg
projectGrid _ =
    div [ class "centered-container" ]
        [ div
            [ class "grid"
            ]
            [ gridSquare "Playing Chess" "https://lichess1.org/assets/______3/flair/img/activity.lichess.webp" "https://lichess.org/@/kadenjtaylor"
            , gridSquare "Visualizing Symbolic Manipulation" "resources/arithmetic_tree.png" "pages/arithmetic_demo"
            , gridSquare "Making WASM Slideshows in Rust" "resources/rust_slideshow.png" "pages/slider_demo"
            , gridSquare "Thinking About Software Clay" "pages/musings/Paper_Clay_Reality.excalidraw.svg" "pages/musings/software_doesnt_have_clay.html"
            , gridSquare "Generating My Resume" "resources/logo_resumaker.png" "https://github.com/kadenjtaylor/resumaker"
            {- Add more squares here -}
            ]
        ]


homePage : Model -> List (Html Msg)
homePage model =
    [ header model
    , about
    , projects model
    ]


notFoundPage : Model -> List (Html Msg)
notFoundPage model =
    [ div []
        [ br []
            []
        , br []
            []
        , h1 []
            [ text (Url.toString model.url) ]
        , p []
            [ text "404 Page Not Found" ]
        ]
    ]
