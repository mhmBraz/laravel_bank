@extends('layouts.profileMain')
@section('title', 'Profile')
@section('scripts')
<script>
    const login = "{{$login}}";
</script>
<script type="text/javascript" src="{{asset('js/profile.js')}}"></script>
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="card border border-primary rounded  py-5 px-3">
        <h1 class="text-center mb-0"> Perfil </h1>
      <hr class="mt-2">
        </div>
    </div>
</div>
@endsection