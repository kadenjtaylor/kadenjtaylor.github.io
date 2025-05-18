module Main exposing (..)

import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Url
import Debug exposing (log)


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
type alias Model =
  { key : Nav.Key
  , url : Url.Url
  }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init _ url key = -- flags
  ( Model key url, Cmd.none )



-- UPDATE
type Msg
  = LinkClicked Browser.UrlRequest
  | UrlChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    LinkClicked urlRequest ->
      case urlRequest of
        Browser.Internal url ->
          -- Here's the issue - if we click an "internal link" to "pages/*", we actually wanna do a load like it's external
          -- Because even though it's all deployed in the same directory, we want the github pages server logic to handle these 
          -- if String.startsWith "/pages/" url.path then
          --   ( model, Nav.load (Url.toString url) )
          -- else
          --   ( model, Nav.pushUrl model.key (Url.toString url) )
          ( model, Nav.load (Url.toString url) )
          -- (model, Debug.log url.path Cmd.none)

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
        { title = "Kaden.DEV",
          body = oldPage model
        }
      _ ->  
        { title = "NOT FOUND"
        , body =
            [ text "The current URL is: "
            , b [] [ text (Url.toString model.url) ]
            ]
        }


oldPage : Model -> List (Html msg)
oldPage _ = -- model
    [div
        [ id "header"
        ]
        [ div
            [ id "title-card"
            ]
            [ h1 []
                [ text "Kaden.dev" ]
            , span []
                [ text "I like building things, solving problems, and building things that solve problems." ]
            ]
        ]
    ,     div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here's what I look like:" ]
        , img
            [ class "rcorners"
            , src "resources/headshot.jpg"
            , alt "Kaden's Face"
            ]
            []
        ]
    ,     div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here's what I'm about:" ]
        , span
            [ id "blurb"
            ]
            [ text " I love domain modeling, functional programming, and making code understandable. I'm on the more extroverted side for a software developer, and I really like getting the chance to understand a domain well enough to explain it to anyone. I believe in collaborating to create the right solution the first time. Recently I've been working in Scala, and that's been an absolute blast. " ]
        , br []
            []
        ]
    ,     div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here are my links:" ]
        , nav []
            [ a
                [ href "https://www.linkedin.com/in/kaden-taylor/"
                ]
                [ text "Linkedin" ]
            , text " | ", a
                [ href "https://github.com/kadenjtaylor"
                ]
                [ text "Github" ]
            , text " | ", a
                [ href "https://github.com/kadenjtaylor/resumaker/raw/main/latex/kaden_taylor_resume.pdf"
                ]
                [ text "Resume" ]
            ]
        ]
    ,     div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here's some stuff I'm doing:" ]
        , ul
            [ style "list-style" "none"
            ]
            [ li
                [ style "margin" "10px"
                ]
                [ a
                    [ href "https://lichess.org/@/kadenjtaylor"
                    ]
                    [ text "Playing Chess" ]
                ]
            , li
                [ style "margin" "10px"
                ]
                [ a
                    [ href "https://kaden.dev/pages/arithmetic_demo"
                    ]
                    [ text "Visualizing Symbolic Manipulation" ]
                ]
            , li
                [ style "margin" "10px"
                ]
                [ a
                    [ href "pages/slider_demo"
                    ]
                    [ text "Making slideshows in Rust+WASM" ]
                ]
            , li
                [ style "margin" "10px"
                ]
                [ a
                    [ href "pages/musings/software_doesnt_have_clay.html"
                    ]
                    [ text "Thinking about Software Clay" ]
                ]
            ]
        ]]
    


viewLink : String -> Html msg
viewLink path =
  li [] [ a [ href path ] [ text path ] ]