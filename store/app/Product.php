<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
      protected $table = 'product';
      protected $primarykey = 'product_id';
      protected $fillable =['name','description','image','price','weight'];

}
