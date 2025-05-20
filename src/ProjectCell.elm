module ProjectCell exposing (..)

import Html exposing (..)
import Domain exposing (..)
import Url


type alias Project =
    { name : String
    , url : Url.Url
    , blurb: String
    , image: Url.Url
    }


view : Project -> Html Msg
view _ =
    div [] []
