module Domain exposing (..)

import Browser
import Browser.Navigation as Nav
import Url


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    }
