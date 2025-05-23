module Domain exposing (..)

import Browser exposing (UrlRequest(..))
import Browser.Navigation as Nav
import Html exposing (Html)
import Url


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    , projects : ProjectDirectory
    }


type alias ProjectDirectory =
    { external : List ExternalProject
    , writeups : List Writeup
    }


type alias Writeup =
    { title : String
    , url : String
    , imgUrl : String
    , content : List (Html Msg)
    }


type alias ExternalProject =
    { title : String
    , imgUrl : String
    , url : String
    }
