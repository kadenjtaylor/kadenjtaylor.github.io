module ProjectCell exposing (..)

import Html exposing (..)
import Domain exposing (..)
import Url

-- This model needs to have multiple cases:
-- - links to some external (or static) page
-- - dynamically does stuff internally

-- THEN, we need to turn that INTO a GridSquare to be rendered

type alias Project =
    { name : String
    , url : Url.Url
    , blurb: String
    , image: Url.Url
    }


view : Project -> Html Msg
view _ =
    div [] []
