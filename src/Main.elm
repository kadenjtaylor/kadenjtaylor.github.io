module Main exposing (..)

import Browser
import Browser.Navigation as Nav
import Domain exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
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


projects : List Project
projects =
    [ External (ExternalProject "Playing Chess" "https://lichess1.org/assets/______3/flair/img/activity.lichess.webp" "https://lichess.org/@/kadenjtaylor")
    , External (ExternalProject "Visualizing Symbolic Manipulation" "resources/arithmetic_tree.png" "pages/arithmetic_demo")
    , External (ExternalProject "Making WASM Slideshows in Rust" "resources/rust_slideshow.png" "pages/slider_demo")
    , External (ExternalProject "Thinking About Software Clay" "pages/musings/Paper_Clay_Reality.excalidraw.svg" "pages/musings/software_doesnt_have_clay.html")
    , External (ExternalProject "Generating My Resume" "resources/logo_resumaker.png" "https://github.com/kadenjtaylor/resumaker")

    -- , Projects.AbarthHatchbackSwitch.root
    ]


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
            [ text "You should be able to link to this, even though it doesn't exist until you ask for it and Github Pages fails to locate it :)" ]
        , p []
            [ text "What you're seeing right now is what happens when you copy your elm.js file into your custom 404 page." ]
        , div [ style "width" "fit-content", style "margin" "auto" ]
            [ h2 [] [ text "How does it work?" ]
            , ol [ style "text-align" "left" ]
                [ li [] [ text "You navigate directly to this url, rather than from inside the site" ]
                , li [] [ text "Github pages tries to find a static resource at this url" ]
                , li [] [ text "It fails, so it returns a 404 along with showing the content of my custom 404.html page" ]
                , li [] [ text "It's then handed over to the transpiled-to-js elm code, which decides what to show based on the given url" ]
                ]
            ]
        , p []
            [ text "If you're reading this, then it means it worked!" ]
        ]


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


projectGrid : List Project -> Html Msg
projectGrid ps =
    div
        [ class "centered-container"
        ]
        [ h2 []
            [ text "Here's some stuff I'm doing:" ]
        , div
            [ style "width" "85%"
            ]
            [ div
                [ class "grid"
                ]
                (List.map gridSquare ps)
            ]
        ]


gridSquare : Project -> Html Msg
gridSquare proj =
    case proj of
        External ep ->
            div
                [ class "square"
                , onClick (LinkClicked (Browser.External ep.url))
                ]
                [ img
                    [ src ep.imgUrl
                    , alt ep.title
                    ]
                    []
                , p
                    [ class "title"
                    ]
                    [ text ep.title ]
                ]

        Internal ip ->
            div
                [ class "square"

                -- , onClick
                --     (String.split " " ip.title
                --         |> List.map String.toLower
                --         |> String.concat
                --         |> Url.fromString
                --         |> Maybe.withDefault
                --             (Url.Url
                --                 Url.Https
                --                 "www.kaden.dev"
                --                 Maybe.Nothing
                --                 "/"
                --                 Maybe.Nothing
                --                 (Maybe.Just "internal-page-not-found")
                --             )
                --         |> Maybe.
                --         |> Browser.Internal
                --         |> LinkClicked
                --     )
                ]
                [ img
                    [ src ""
                    , alt ip.title
                    ]
                    []
                , p
                    [ class "title"
                    ]
                    [ text ip.title ]
                ]


homePage : Model -> List (Html Msg)
homePage model =
    [ header
    , about
    , projectGrid model.projects
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
