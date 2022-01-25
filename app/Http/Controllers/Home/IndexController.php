<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Services\Home\IndexService;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use function auth;
use function redirect;
use function response;
use function view;

class IndexController extends Controller
{
    public function index()
    {
        return view('home.index');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }

    public function checkLogin(Request $request)
    {
        try {
            $serviceIndex = new IndexService();
            $serviceIndex = $serviceIndex->ServiceLogin($request->all());

            return $serviceIndex;
        }
        catch (QueryException $e) {
            return Response::json([
                'success' => false,
                'message' => 'Erro ao realizar consulta, tente novamente mais tarde.',
            ], 400);
        }
        catch (\Exception $e){
            return Response::json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 400);
        }
    }


    public function profile($login)
    {
        if (Auth::check()) {
            if (Auth()->user()->login == $login || Auth()->user()->admin == 1) {
                return view('profile.profile', ['login' => $login]);
            } else {
                return redirect('/');
            }
        } else {
            return redirect('/');
        }
    }

    public function indexCheckLogin(Request $req)
    {

        return response()->json(IndexService::ServiceLogin($req->all()));
    }


    public function indexRemember(Request $req)
    {

        return response()->json(IndexService::ServiceRemember($req->all()));
    }

    public function admin()
    {
        return view('admin');
    }
}
