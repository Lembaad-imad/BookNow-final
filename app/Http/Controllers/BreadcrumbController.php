<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Diglactic\Breadcrumbs\Breadcrumbs;

class BreadcrumbController extends Controller
{
    public function getBreadcrumbs(Request $request)
    {
        $routeName = $request->input('route_name');
        $params = $request->input('params', []);

        try {
            $breadcrumbs = Breadcrumbs::generateArray($routeName, $params);
            return response()->json($breadcrumbs);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to generate breadcrumbs'], 500);
        }
    }
}
