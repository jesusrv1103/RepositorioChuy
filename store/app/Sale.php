<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
      protected $table = 'sale';
      protected $primarykey = 'sale_id';
      protected $fillable =['name','email','address','total','subtotal','shipping','taxes'];

}
