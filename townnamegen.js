(function (console, $hx_exports) { "use strict";
$hx_exports.townnamegen = $hx_exports.townnamegen || {};
$hx_exports.townnamegen.demo = $hx_exports.townnamegen.demo || {};
var $hxClasses = {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var CompileTime = function() { };
$hxClasses["CompileTime"] = CompileTime;
CompileTime.__name__ = ["CompileTime"];
var CompileTimeClassList = function() { };
$hxClasses["CompileTimeClassList"] = CompileTimeClassList;
CompileTimeClassList.__name__ = ["CompileTimeClassList"];
CompileTimeClassList.get = function(id) {
	if(CompileTimeClassList.lists == null) CompileTimeClassList.initialise();
	return CompileTimeClassList.lists.get(id);
};
CompileTimeClassList.getTyped = function(id,type) {
	return CompileTimeClassList.get(id);
};
CompileTimeClassList.initialise = function() {
	CompileTimeClassList.lists = new haxe_ds_StringMap();
	var m = haxe_rtti_Meta.getType(CompileTimeClassList);
	if(m.classLists != null) {
		var _g = 0;
		var _g1 = m.classLists;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			var array = item;
			var listID = array[0];
			var list = new List();
			var _g2 = 0;
			var _g3 = array[1].split(",");
			while(_g2 < _g3.length) {
				var typeName = _g3[_g2];
				++_g2;
				var type = Type.resolveClass(typeName);
				if(type != null) list.push(type);
			}
			CompileTimeClassList.lists.set(listID,list);
		}
	}
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
$hxClasses["_List.ListIterator"] = _$List_ListIterator;
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
Math.__name__ = ["Math"];
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
var de_polygonal_core_math_Mathematics = function() { };
$hxClasses["de.polygonal.core.math.Mathematics"] = de_polygonal_core_math_Mathematics;
de_polygonal_core_math_Mathematics.__name__ = ["de","polygonal","core","math","Mathematics"];
de_polygonal_core_math_Mathematics.toRad = function(deg) {
	return deg * 0.017453292519943295;
};
de_polygonal_core_math_Mathematics.toDeg = function(rad) {
	return rad * 57.29577951308232;
};
de_polygonal_core_math_Mathematics.min = function(x,y) {
	if(x < y) return x; else return y;
};
de_polygonal_core_math_Mathematics.max = function(x,y) {
	if(x > y) return x; else return y;
};
de_polygonal_core_math_Mathematics.abs = function(x) {
	if(x < 0) return -x; else return x;
};
de_polygonal_core_math_Mathematics.sgn = function(x) {
	if(x > 0) return 1; else if(x < 0) return -1; else return 0;
};
de_polygonal_core_math_Mathematics.clamp = function(x,min,max) {
	if(x < min) return min; else if(x > max) return max; else return x;
};
de_polygonal_core_math_Mathematics.clampSym = function(x,i) {
	if(x < -i) return -i; else if(x > i) return i; else return x;
};
de_polygonal_core_math_Mathematics.wrap = function(x,min,max) {
	if(x < min) return x - min + max + 1; else if(x > max) return x - max + min - 1; else return x;
};
de_polygonal_core_math_Mathematics.fmin = function(x,y) {
	if(x < y) return x; else return y;
};
de_polygonal_core_math_Mathematics.fmax = function(x,y) {
	if(x > y) return x; else return y;
};
de_polygonal_core_math_Mathematics.fabs = function(x) {
	if(x < 0) return -x; else return x;
};
de_polygonal_core_math_Mathematics.fsgn = function(x) {
	if(x > 0.) return 1; else if(x < 0.) return -1; else return 0;
};
de_polygonal_core_math_Mathematics.fclamp = function(x,min,max) {
	if(x < min) return min; else if(x > max) return max; else return x;
};
de_polygonal_core_math_Mathematics.fclampSym = function(x,i) {
	if(x < -i) return -i; else if(x > i) return i; else return x;
};
de_polygonal_core_math_Mathematics.fwrap = function(value,lower,upper) {
	return value - ((value - lower) / (upper - lower) | 0) * (upper - lower);
};
de_polygonal_core_math_Mathematics.eqSgn = function(x,y) {
	return (x ^ y) >= 0;
};
de_polygonal_core_math_Mathematics.isEven = function(x) {
	return (x & 1) == 0;
};
de_polygonal_core_math_Mathematics.isPow2 = function(x) {
	return x > 0 && (x & x - 1) == 0;
};
de_polygonal_core_math_Mathematics.lerp = function(a,b,t) {
	return a + (b - a) * t;
};
de_polygonal_core_math_Mathematics.slerp = function(a,b,t) {
	var m = Math;
	var c1 = m.sin(a * .5);
	var r1 = m.cos(a * .5);
	var c2 = m.sin(b * .5);
	var r2 = m.cos(b * .5);
	var c = r1 * r2 + c1 * c2;
	if(c < 0.) {
		if(1. + c > 1e-6) {
			var o = m.acos(-c);
			var s = m.sin(o);
			var s0 = m.sin((1 - t) * o) / s;
			var s1 = m.sin(t * o) / s;
			return m.atan2(s0 * c1 - s1 * c2,s0 * r1 - s1 * r2) * 2.;
		} else {
			var s01 = 1 - t;
			var s11 = t;
			return m.atan2(s01 * c1 - s11 * c2,s01 * r1 - s11 * r2) * 2;
		}
	} else if(1 - c > 1e-6) {
		var o1 = m.acos(c);
		var s2 = m.sin(o1);
		var s02 = m.sin((1 - t) * o1) / s2;
		var s12 = m.sin(t * o1) / s2;
		return m.atan2(s02 * c1 + s12 * c2,s02 * r1 + s12 * r2) * 2.;
	} else {
		var s03 = 1 - t;
		var s13 = t;
		return m.atan2(s03 * c1 + s13 * c2,s03 * r1 + s13 * r2) * 2.;
	}
};
de_polygonal_core_math_Mathematics.nextPow2 = function(x) {
	var t = x - 1;
	t |= t >> 1;
	t |= t >> 2;
	t |= t >> 4;
	t |= t >> 8;
	t |= t >> 16;
	return t + 1;
};
de_polygonal_core_math_Mathematics.exp = function(a,n) {
	var t = 1;
	var r = 0;
	while(true) {
		if((n & 1) != 0) t = a * t;
		n >>= 1;
		if(n == 0) {
			r = t;
			break;
		} else a *= a;
	}
	return r;
};
de_polygonal_core_math_Mathematics.log10 = function(x) {
	return Math.log(x) * 0.4342944819032517;
};
de_polygonal_core_math_Mathematics.roundTo = function(x,y) {
	return Math.round(x / y) * y;
};
de_polygonal_core_math_Mathematics.round = function(x) {
	return (x + 16384.5 | 0) - 16384;
};
de_polygonal_core_math_Mathematics.ceil = function(x) {
	var f = x | 0;
	if(x == f) return f; else {
		x += 1;
		var f1 = x | 0;
		if(x < 0 && f1 != x) f1--;
		return f1;
	}
};
de_polygonal_core_math_Mathematics.floor = function(x) {
	var f = x | 0;
	if(x < 0 && f != x) f--;
	return f;
};
de_polygonal_core_math_Mathematics.sqrt = function(x) {
	return Math.sqrt(x);
};
de_polygonal_core_math_Mathematics.invSqrt = function(x) {
	return 1 / Math.sqrt(x);
};
de_polygonal_core_math_Mathematics.cmpAbs = function(x,y,eps) {
	var d = x - y;
	if(d > 0) return d < eps; else return -d < eps;
};
de_polygonal_core_math_Mathematics.cmpZero = function(x,eps) {
	if(x > 0) return x < eps; else return -x < eps;
};
de_polygonal_core_math_Mathematics.snap = function(x,y) {
	return de_polygonal_core_math_Mathematics.floor((x + y * .5) / y);
};
de_polygonal_core_math_Mathematics.inRange = function(x,min,max) {
	return x >= min && x <= max;
};
de_polygonal_core_math_Mathematics.wrapToPI = function(x) {
	x += 3.141592653589793;
	return x - 6.283185307179586 * Math.floor(x / 6.283185307179586) - 3.141592653589793;
};
de_polygonal_core_math_Mathematics.wrapToPI2 = function(x) {
	return x - 6.283185307179586 * Math.floor(x / 6.283185307179586);
};
de_polygonal_core_math_Mathematics.gcd = function(x,y) {
	var d = 0;
	var r = 0;
	if(x < 0) x = -x; else x = x;
	if(y < 0) y = -y; else y = y;
	while(true) if(y == 0) {
		d = x;
		break;
	} else {
		r = x % y;
		x = y;
		y = r;
	}
	return d;
};
de_polygonal_core_math_Mathematics.maxPrecision = function(x,precision) {
	return de_polygonal_core_math_Mathematics.roundTo(x,Math.pow(10,-precision));
};
de_polygonal_core_math_Mathematics.ofBool = function(x) {
	if(x) return 1; else return 0;
};
var de_polygonal_core_math_random_RNG = function() {
	this._seed = 0;
};
$hxClasses["de.polygonal.core.math.random.RNG"] = de_polygonal_core_math_random_RNG;
de_polygonal_core_math_random_RNG.__name__ = ["de","polygonal","core","math","random","RNG"];
de_polygonal_core_math_random_RNG.prototype = {
	getSeed: function() {
		return this._seed;
	}
	,setSeed: function(seed) {
		this._seed = seed;
	}
	,random: function() {
		throw new js__$Boot_HaxeError("override for implementation");
	}
	,randomFloat: function() {
		throw new js__$Boot_HaxeError("override for implementation");
	}
	,randomRange: function(min,max) {
		var l = min - .4999;
		var h = max + .4999;
		return de_polygonal_core_math_Mathematics.round(l + (h - l) * this.randomFloat());
	}
	,randomFloatRange: function(min,max) {
		return min + (max - min) * this.randomFloat();
	}
	,randomSym: function(range) {
		return this.randomRange(-range,range);
	}
	,randomFloatSym: function(range) {
		return this.randomFloatRange(-range,range);
	}
	,__class__: de_polygonal_core_math_random_RNG
};
var de_polygonal_core_math_random_Mersenne = function(seed) {
	if(seed == null) seed = 5489;
	de_polygonal_core_math_random_RNG.call(this);
	var this1;
	this1 = new Array(624);
	this._stateVector = this1;
	var this2;
	this2 = new Array(2);
	this._kMag01 = this2;
	this._kMag01[0] = 0;
	this._kMag01[1] = -1727483681;
	this.setSeed(seed);
};
$hxClasses["de.polygonal.core.math.random.Mersenne"] = de_polygonal_core_math_random_Mersenne;
de_polygonal_core_math_random_Mersenne.__name__ = ["de","polygonal","core","math","random","Mersenne"];
de_polygonal_core_math_random_Mersenne.__super__ = de_polygonal_core_math_random_RNG;
de_polygonal_core_math_random_Mersenne.prototype = $extend(de_polygonal_core_math_random_RNG.prototype,{
	free: function() {
		this._stateVector = null;
		this._kMag01 = null;
	}
	,setSeed: function(seed) {
		de_polygonal_core_math_random_RNG.prototype.setSeed.call(this,seed);
		this._stateVector[0] = seed;
		var _g = 1;
		while(_g < 624) {
			var i = _g++;
			this._setState(i,this.add32(this.mul32(1812433253,this.ui32(this._stateVector[i - 1] ^ this._stateVector[i - 1] >>> 30)),i));
			this._setState(i,this.ui32(this._stateVector[i] & -1));
		}
		this._currentEntry = 624;
	}
	,initByArray: function(keys) {
		var i = 1;
		var j = 0;
		this.setSeed(19650218);
		var length = keys.length;
		var k;
		if(624 > length) k = 624; else k = length;
		while(k > 0) {
			this._setState(i,this.add32(this.add32(this.ui32(this._stateVector[i] ^ this.mul32(this.ui32(this._stateVector[i - 1] ^ this._stateVector[i - 1] >>> 30),1664525)),keys[j]),j));
			this._setState(i,this.ui32(this._stateVector[i] & -1));
			i++;
			j++;
			if(i >= 624) {
				this._stateVector[0] = this._stateVector[623];
				i = 1;
			}
			if(j >= length) j = 0;
			k--;
		}
		k = 623;
		while(k > 0) {
			this._setState(i,this.sub32(this.ui32(this._stateVector[i] ^ this.mul32(this.ui32(this._stateVector[i - 1] ^ this._stateVector[i - 1] >>> 30),1566083941)),i));
			this._setState(i,this.ui32(this._stateVector[i] & -1));
			i++;
			if(i >= 624) {
				this._stateVector[0] = this._stateVector[623];
				i = 1;
			}
			k--;
		}
		this._stateVector[0] = -2147483648;
	}
	,random: function() {
		if(this._currentEntry >= 624) {
			var temp;
			var _g1 = 0;
			var _g = 227;
			while(_g1 < _g) {
				var k = _g1++;
				temp = this.ui32(this._stateVector[k] & -2147483648 | this._stateVector[k + 1] & -2147483648 - 1);
				this._setState(k,this.ui32(this._stateVector[k + 397] ^ temp >>> 1 ^ this._kMag01[temp & 1]));
			}
			var _g11 = 227;
			var _g2 = 623;
			while(_g11 < _g2) {
				var k1 = _g11++;
				temp = this.ui32(this._stateVector[k1] & -2147483648 | this._stateVector[k1 + 1] & -2147483648 - 1);
				this._setState(k1,this.ui32(this._stateVector[k1 + -227] ^ temp >>> 1 ^ this._kMag01[temp & 1]));
			}
			temp = this.ui32(this._stateVector[623] & -2147483648 | this._stateVector[0] & -2147483648 - 1);
			this._setState(623,this.ui32(this._stateVector[396] ^ temp >>> 1 ^ this._kMag01[temp & 1]));
			this._currentEntry = 0;
		}
		var y = this._getState(this._currentEntry++);
		y = this.ui32(y ^ y >>> 11);
		y = this.ui32(y ^ y << 7 & -1658038656);
		y = this.ui32(y ^ y << 15 & -272236544);
		y = this.ui32(y ^ y >>> 18);
		return y >>> 0;
	}
	,randomFloat: function() {
		return this.random() * 2.3283064365386963e-010;
	}
	,_getMag01: function(i) {
		return this._kMag01[i];
	}
	,_getState: function(i) {
		return this._stateVector[i];
	}
	,_setState: function(i,x) {
		this._stateVector[i] = x;
	}
	,ui32: function(x) {
		if(x < 0) return (x ^ -2147483648) + -2147483648; else return x;
	}
	,add32: function(a,b) {
		return this.ui32(a + b & -1);
	}
	,sub32: function(a,b) {
		if(a < b) return this.ui32((4294967296 | 0) - (b - a) & -1); else return a - b;
	}
	,mul32: function(a,b) {
		var sum = 0;
		var _g = 0;
		while(_g < 32) {
			var i = _g++;
			if((a >>> i & 1) != 0) sum = this.add32(sum,this.ui32(b << i));
		}
		return sum;
	}
	,__class__: de_polygonal_core_math_random_Mersenne
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_rtti_Meta = function() { };
$hxClasses["haxe.rtti.Meta"] = haxe_rtti_Meta;
haxe_rtti_Meta.__name__ = ["haxe","rtti","Meta"];
haxe_rtti_Meta.getType = function(t) {
	var meta = haxe_rtti_Meta.getMeta(t);
	if(meta == null || meta.obj == null) return { }; else return meta.obj;
};
haxe_rtti_Meta.getMeta = function(t) {
	return t.__meta__;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var townnamegen_TownNameGen = $hx_exports.townnamegen.TownNameGen = function() {
};
$hxClasses["townnamegen.TownNameGen"] = townnamegen_TownNameGen;
townnamegen_TownNameGen.__name__ = ["townnamegen","TownNameGen"];
townnamegen_TownNameGen.addLocale = function(localeKey,locale) {
	{
		townnamegen_TownNameGen.LOCALE_MAP.set(localeKey,locale);
		locale;
	}
};
townnamegen_TownNameGen.generate = function(localeKey,num,seed) {
	var locale = townnamegen_TownNameGen.LOCALE_MAP.get(localeKey);
	if(locale == null) throw new js__$Boot_HaxeError("Locale not found: " + Std.string(locale));
	if(seed == null) seed = Math.floor(new Date().getTime());
	var randomizer = new de_polygonal_core_math_random_Mersenne(seed);
	var names = new haxe_ds_StringMap();
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var newSeed = Math.floor(randomizer.random());
		var name = locale.generateName(newSeed);
		var j = 1000;
		while((__map_reserved[name] != null?names.getReserved(name):names.h[name]) && j > 0) {
			newSeed = Math.floor(randomizer.random());
			name = locale.generateName(newSeed);
			j--;
		}
		if(j == 0) {
			console.log("Too many names, can't generate any more unique ones!");
			break;
		} else {
			if(__map_reserved[name] != null) names.setReserved(name,true); else names.h[name] = true;
			true;
		}
	}
	var _g1 = [];
	var $it0 = names.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		_g1.push(k);
	}
	return _g1;
};
townnamegen_TownNameGen.prototype = {
	__class__: townnamegen_TownNameGen
};
var townnamegen_demo_DemoForm = $hx_exports.townnamegen.demo.DemoForm = function() {
};
$hxClasses["townnamegen.demo.DemoForm"] = townnamegen_demo_DemoForm;
townnamegen_demo_DemoForm.__name__ = ["townnamegen","demo","DemoForm"];
townnamegen_demo_DemoForm.main = function() {
	window.document.getElementById(townnamegen_demo_DemoForm.FORM_NAME).onsubmit = function(event) {
		event.preventDefault();
		var form = new townnamegen_demo_DemoForm();
		form.submit();
	};
};
townnamegen_demo_DemoForm.prototype = {
	submit: function() {
		var localeKey = this.getSelectValue("localeKey");
		var numberToGenerate = this.getIntValue("numberToGenerate");
		var seed = this.getIntValue("seed");
		if(isNaN(seed)) seed = null;
		var results = townnamegen_TownNameGen.generate(localeKey,numberToGenerate,seed);
		this.writeToOutput(results);
	}
	,getSelectValue: function(id) {
		var element;
		element = js_Boot.__cast(window.document.getElementById(id) , HTMLSelectElement);
		return element.value;
	}
	,getIntValue: function(id) {
		var element;
		element = js_Boot.__cast(window.document.getElementById(id) , HTMLInputElement);
		return Math.floor(element.valueAsNumber);
	}
	,writeToOutput: function(results) {
		var element;
		element = js_Boot.__cast(window.document.getElementById("output") , HTMLTextAreaElement);
		element.value = results.join("\n");
	}
	,__class__: townnamegen_demo_DemoForm
};
var townnamegen_locales_BaseLocale = function() {
};
$hxClasses["townnamegen.locales.BaseLocale"] = townnamegen_locales_BaseLocale;
townnamegen_locales_BaseLocale.__name__ = ["townnamegen","locales","BaseLocale"];
townnamegen_locales_BaseLocale.GB = function(x,s,n) {
	return x >> s & (1 << n) - 1;
};
townnamegen_locales_BaseLocale.prototype = {
	SeedChanceBias: function(shiftBy,max,seed,bias) {
		return ((seed >> shiftBy & 65535) * (max + bias) >> 16) - bias;
	}
	,SeedChance: function(shiftBy,max,seed) {
		return (seed >> shiftBy & 65535) * max >> 16;
	}
	,append: function(buf,table,chance,seed) {
		buf.b += Std.string(table[(seed >> chance & 65535) * table.length >> 16]);
	}
	,appendBias: function(buf,table,chance,seed,bias) {
		var i = ((seed >> chance & 65535) * (table.length + bias) >> 16) - bias;
		if(i >= 0) buf.b += Std.string(table[i]);
	}
	,getLocaleKey: function() {
		var clz = js_Boot.getClass(this);
		var clzName = Type.getClassName(clz);
		var clzNameSplit = clzName.split(".");
		return clzNameSplit[clzNameSplit.length - 1];
	}
	,getDisplayName: function() {
		var key = this.getLocaleKey();
		var splitOn = new EReg("([A-Z])","g");
		var _this = splitOn.replace(key," $1");
		return HxOverrides.substr(_this,1,null);
	}
	,__class__: townnamegen_locales_BaseLocale
};
var townnamegen_locales_ILocale = function() { };
$hxClasses["townnamegen.locales.ILocale"] = townnamegen_locales_ILocale;
townnamegen_locales_ILocale.__name__ = ["townnamegen","locales","ILocale"];
townnamegen_locales_ILocale.prototype = {
	__class__: townnamegen_locales_ILocale
};
var townnamegen_locales_AdditionalEnglish = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.AdditionalEnglish"] = townnamegen_locales_AdditionalEnglish;
townnamegen_locales_AdditionalEnglish.__name__ = ["townnamegen","locales","AdditionalEnglish"];
townnamegen_locales_AdditionalEnglish.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_AdditionalEnglish.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_AdditionalEnglish.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		this.appendBias(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_prefix,0,seed,50);
		if((seed >> 3 & 65535) * 20 >> 16 >= 14) this.append(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_1a,6,seed); else {
			this.append(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_1b1,6,seed);
			this.append(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_1b2,9,seed);
			if((seed >> 11 & 65535) * 20 >> 16 >= 4) this.append(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_1b3a,12,seed); else this.append(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_1b3b,12,seed);
		}
		this.append(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_2,14,seed);
		this.appendBias(buf,townnamegen_locales_AdditionalEnglish._name_additional_english_3,15,seed,60);
		var name = buf.b;
		return this.ReplaceEnglishWords(name);
	}
	,ReplaceEnglishWords: function(name) {
		name = StringTools.replace(name,"Cunt","East");
		name = StringTools.replace(name,"Slag","Pits");
		name = StringTools.replace(name,"Slut","Edin");
		name = StringTools.replace(name,"Fart","Boot");
		name = StringTools.replace(name,"Drar","Quar");
		name = StringTools.replace(name,"Dreh","Bash");
		name = StringTools.replace(name,"Frar","Shor");
		name = StringTools.replace(name,"Grar","Aber");
		name = StringTools.replace(name,"Brar","Over");
		name = StringTools.replace(name,"Wrar","Stan");
		return name;
	}
	,__class__: townnamegen_locales_AdditionalEnglish
});
var townnamegen_locales_Austrian = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.Austrian"] = townnamegen_locales_Austrian;
townnamegen_locales_Austrian.__name__ = ["townnamegen","locales","Austrian"];
townnamegen_locales_Austrian.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_Austrian.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_Austrian.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		this.appendBias(buf,townnamegen_locales_Austrian._name_austrian_a1,0,seed,15);
		var j = 0;
		var i = (seed >> 4 & 65535) * 6 >> 16;
		if(i >= 4) {
			this.append(buf,townnamegen_locales_Austrian._name_austrian_a2,7,seed);
			this.append(buf,townnamegen_locales_Austrian._name_austrian_a3,13,seed);
		} else if(i >= 2) {
			this.append(buf,townnamegen_locales_Austrian._name_austrian_a5,7,seed);
			this.append(buf,townnamegen_locales_Austrian._name_austrian_a6,9,seed);
			j = 1;
		} else this.append(buf,townnamegen_locales_Austrian._name_austrian_a4,7,seed);
		i = (seed >> 1 & 65535) * 6 >> 16;
		if(i >= 4 - j) {
			this.append(buf,townnamegen_locales_Austrian._name_austrian_f1,4,seed);
			this.append(buf,townnamegen_locales_Austrian._name_austrian_f2,5,seed);
		} else if(i >= 2 - j) {
			this.append(buf,townnamegen_locales_Austrian._name_austrian_b1,4,seed);
			this.append(buf,townnamegen_locales_Austrian._name_austrian_b2,5,seed);
		}
		return buf.b;
	}
	,__class__: townnamegen_locales_Austrian
});
var townnamegen_locales_Dutch = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.Dutch"] = townnamegen_locales_Dutch;
townnamegen_locales_Dutch.__name__ = ["townnamegen","locales","Dutch"];
townnamegen_locales_Dutch.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_Dutch.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_Dutch.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		this.appendBias(buf,townnamegen_locales_Dutch._name_dutch_1,0,seed,50);
		if((seed >> 6 & 65535) * 9 >> 16 > 4) this.append(buf,townnamegen_locales_Dutch._name_dutch_2,9,seed); else {
			this.append(buf,townnamegen_locales_Dutch._name_dutch_3,9,seed);
			this.append(buf,townnamegen_locales_Dutch._name_dutch_4,12,seed);
		}
		this.append(buf,townnamegen_locales_Dutch._name_dutch_5,15,seed);
		return buf.b;
	}
	,__class__: townnamegen_locales_Dutch
});
var townnamegen_locales_Finnish = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.Finnish"] = townnamegen_locales_Finnish;
townnamegen_locales_Finnish.__name__ = ["townnamegen","locales","Finnish"];
townnamegen_locales_Finnish.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_Finnish.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_Finnish.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		if((seed & 65535) * 15 >> 16 >= 5) {
			var sel1 = (seed & 65535) * townnamegen_locales_Finnish._name_finnish_1.length >> 16;
			var part = townnamegen_locales_Finnish._name_finnish_1[sel1];
			if(StringTools.endsWith(part,"i")) part = HxOverrides.substr(part,0,part.length - 1) + "e";
			if(part == null) buf.b += "null"; else buf.b += "" + part;
			var tmp = buf.b;
			var regex = new EReg("[aou]","i");
			if(regex.match(tmp)) buf.b += "la"; else buf.b += "lä";
			return buf.b;
		}
		var sel = (seed >> 2 & 65535) * (townnamegen_locales_Finnish._name_finnish_1.length + townnamegen_locales_Finnish._name_finnish_2.length) >> 16;
		if(sel >= townnamegen_locales_Finnish._name_finnish_1.length) buf.b += Std.string(townnamegen_locales_Finnish._name_finnish_2[sel - townnamegen_locales_Finnish._name_finnish_1.length]); else buf.b += Std.string(townnamegen_locales_Finnish._name_finnish_1[sel]);
		this.append(buf,townnamegen_locales_Finnish._name_finnish_3,10,seed);
		return buf.b;
	}
	,__class__: townnamegen_locales_Finnish
});
var townnamegen_locales_German = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.German"] = townnamegen_locales_German;
townnamegen_locales_German.__name__ = ["townnamegen","locales","German"];
townnamegen_locales_German.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_German.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_German.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		var seed_derivative = (seed >> 7 & 65535) * 28 >> 16;
		if(seed_derivative == 12 || seed_derivative == 19) this.append(buf,townnamegen_locales_German._name_german_pre,2,seed);
		this.append(buf,townnamegen_locales_German._name_german_1,3,seed);
		this.append(buf,townnamegen_locales_German._name_german_2,5,seed);
		if(seed_derivative == 24) {
			var i = (seed >> 9 & 65535) * (townnamegen_locales_German._name_german_4_an_der.length + townnamegen_locales_German._name_german_4_am.length) >> 16;
			if(i < townnamegen_locales_German._name_german_4_an_der.length) {
				buf.b += Std.string(townnamegen_locales_German._name_german_3_an_der[0]);
				buf.b += Std.string(townnamegen_locales_German._name_german_4_an_der[i]);
			} else {
				buf.b += Std.string(townnamegen_locales_German._name_german_3_am[0]);
				buf.b += Std.string(townnamegen_locales_German._name_german_4_am[i - townnamegen_locales_German._name_german_4_an_der.length]);
			}
		}
		return buf.b;
	}
	,__class__: townnamegen_locales_German
});
var townnamegen_locales_OriginalEnglish = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.OriginalEnglish"] = townnamegen_locales_OriginalEnglish;
townnamegen_locales_OriginalEnglish.__name__ = ["townnamegen","locales","OriginalEnglish"];
townnamegen_locales_OriginalEnglish.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_OriginalEnglish.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_OriginalEnglish.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		this.appendBias(buf,townnamegen_locales_OriginalEnglish._name_original_english_1,0,seed,50);
		this.append(buf,townnamegen_locales_OriginalEnglish._name_original_english_2,4,seed);
		this.append(buf,townnamegen_locales_OriginalEnglish._name_original_english_3,7,seed);
		this.append(buf,townnamegen_locales_OriginalEnglish._name_original_english_4,10,seed);
		this.append(buf,townnamegen_locales_OriginalEnglish._name_original_english_5,13,seed);
		this.appendBias(buf,townnamegen_locales_OriginalEnglish._name_original_english_6,15,seed,60);
		var name = buf.b;
		if(name.lastIndexOf("C",0) == 0 && (name.lastIndexOf("e",1) == 1 || name.lastIndexOf("i",1) == 1)) name = "K" + HxOverrides.substr(name,1,null);
		return this.ReplaceEnglishWords(name);
	}
	,ReplaceEnglishWords: function(name) {
		name = StringTools.replace(name,"Cunt","East");
		name = StringTools.replace(name,"Slag","Pits");
		name = StringTools.replace(name,"Slut","Edin");
		name = StringTools.replace(name,"Fart","Boot");
		name = StringTools.replace(name,"Drar","Quar");
		name = StringTools.replace(name,"Dreh","Bash");
		name = StringTools.replace(name,"Frar","Shor");
		name = StringTools.replace(name,"Grar","Aber");
		name = StringTools.replace(name,"Brar","Over");
		name = StringTools.replace(name,"Wrar","Inve");
		return name;
	}
	,__class__: townnamegen_locales_OriginalEnglish
});
var townnamegen_locales_Silly = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.Silly"] = townnamegen_locales_Silly;
townnamegen_locales_Silly.__name__ = ["townnamegen","locales","Silly"];
townnamegen_locales_Silly.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_Silly.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_Silly.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		this.append(buf,townnamegen_locales_Silly._name_silly_1,0,seed);
		this.append(buf,townnamegen_locales_Silly._name_silly_2,16,seed);
		return buf.b;
	}
	,__class__: townnamegen_locales_Silly
});
var townnamegen_locales_Swedish = function() {
	townnamegen_locales_BaseLocale.call(this);
};
$hxClasses["townnamegen.locales.Swedish"] = townnamegen_locales_Swedish;
townnamegen_locales_Swedish.__name__ = ["townnamegen","locales","Swedish"];
townnamegen_locales_Swedish.__interfaces__ = [townnamegen_locales_ILocale];
townnamegen_locales_Swedish.__super__ = townnamegen_locales_BaseLocale;
townnamegen_locales_Swedish.prototype = $extend(townnamegen_locales_BaseLocale.prototype,{
	generateName: function(seed) {
		var buf = new StringBuf();
		this.appendBias(buf,townnamegen_locales_Swedish._name_swedish_1,0,seed,50);
		if((seed >> 4 & 65535) * 5 >> 16 >= 3) this.append(buf,townnamegen_locales_Swedish._name_swedish_2,7,seed); else {
			this.append(buf,townnamegen_locales_Swedish._name_swedish_2a,7,seed);
			this.append(buf,townnamegen_locales_Swedish._name_swedish_2b,10,seed);
			this.append(buf,townnamegen_locales_Swedish._name_swedish_2c,13,seed);
		}
		this.append(buf,townnamegen_locales_Swedish._name_swedish_3,16,seed);
		return buf.b;
	}
	,__class__: townnamegen_locales_Swedish
});
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
CompileTimeClassList.__meta__ = { obj : { classLists : [["null,true,townnamegen.locales.ILocale","townnamegen.locales.AdditionalEnglish,townnamegen.locales.Austrian,townnamegen.locales.Dutch,townnamegen.locales.Finnish,townnamegen.locales.German,townnamegen.locales.OriginalEnglish,townnamegen.locales.Silly,townnamegen.locales.Swedish"]]}};
de_polygonal_core_math_Mathematics.NaN = NaN;
de_polygonal_core_math_Mathematics.POSITIVE_INFINITY = Infinity;
de_polygonal_core_math_Mathematics.NEGATIVE_INFINITY = -Infinity;
de_polygonal_core_math_Mathematics.ZERO_TOLERANCE = 1e-08;
de_polygonal_core_math_Mathematics.RAD_DEG = 57.29577951308232;
de_polygonal_core_math_Mathematics.DEG_RAD = 0.017453292519943295;
de_polygonal_core_math_Mathematics.LN2 = 0.6931471805599453;
de_polygonal_core_math_Mathematics.LN10 = 2.302585092994046;
de_polygonal_core_math_Mathematics.PI_OVER_2 = 1.5707963267948966;
de_polygonal_core_math_Mathematics.PI_OVER_4 = 0.7853981633974483;
de_polygonal_core_math_Mathematics.PI = 3.141592653589793;
de_polygonal_core_math_Mathematics.PI2 = 6.283185307179586;
de_polygonal_core_math_Mathematics.EPS = 1e-6;
de_polygonal_core_math_Mathematics.SQRT2 = 1.414213562373095;
de_polygonal_core_math_random_Mersenne.kN = 624;
de_polygonal_core_math_random_Mersenne.kM = 397;
de_polygonal_core_math_random_Mersenne.kR = 31;
de_polygonal_core_math_random_Mersenne.kA = -1727483681;
de_polygonal_core_math_random_Mersenne.kU = 11;
de_polygonal_core_math_random_Mersenne.kS = 7;
de_polygonal_core_math_random_Mersenne.kT = 15;
de_polygonal_core_math_random_Mersenne.kL = 18;
de_polygonal_core_math_random_Mersenne.kB = -1658038656;
de_polygonal_core_math_random_Mersenne.kC = -272236544;
de_polygonal_core_math_random_Mersenne.kLowerMask = -2147483648 - 1;
de_polygonal_core_math_random_Mersenne.kUpperMask = -2147483648;
de_polygonal_core_math_random_Mersenne.kTwistMask = 1;
js_Boot.__toStr = {}.toString;
townnamegen_TownNameGen.LOCALE_MAP = (function($this) {
	var $r;
	var map = new haxe_ds_StringMap();
	{
		var _g = CompileTimeClassList.get("null,true,townnamegen.locales.ILocale").iterator();
		while(_g.head != null) {
			var clz;
			clz = (function($this) {
				var $r;
				_g.val = _g.head[0];
				_g.head = _g.head[1];
				$r = _g.val;
				return $r;
			}($this));
			var instance = Type.createInstance(clz,[]);
			var key = instance.getLocaleKey();
			if(__map_reserved[key] != null) map.setReserved(key,instance); else map.h[key] = instance;
		}
	}
	$r = map;
	return $r;
}(this));
townnamegen_demo_DemoForm.FORM_NAME = "demoForm";
townnamegen_locales_AdditionalEnglish._name_additional_english_prefix = ["Great ","Little ","New ","Fort ","St. ","Old "];
townnamegen_locales_AdditionalEnglish._name_additional_english_1a = ["Pen","Lough","Stam","Aber","Acc","Ex","Ax","Bre","Cum","Dun","Fin","Inver","Kin","Mon","Nan","Nant","Pit","Pol","Pont","Strath","Tre","Tilly","Beck","Canter","Bath","Liver","Mal","Ox","Bletch","Maccles","Grim","Wind","Sher","Gates","Orp","Brom","Lewis","Whit","White","Worm","Tyne","Avon","Stan"];
townnamegen_locales_AdditionalEnglish._name_additional_english_1b1 = ["Wr","B","C","Ch","Br","D","Dr","F","Fr","Fl","G","Gr","H","L","M","N","P","Pr","Pl","R","S","S","Sl","T","Tr","W"];
townnamegen_locales_AdditionalEnglish._name_additional_english_1b2 = ["ar","a","e","in","on","u","o","ee","es","ea","un","en"];
townnamegen_locales_AdditionalEnglish._name_additional_english_1b3a = ["n","d","","t","",""];
townnamegen_locales_AdditionalEnglish._name_additional_english_1b3b = ["ning","ding","fing"];
townnamegen_locales_AdditionalEnglish._name_additional_english_2 = ["ville","ham","field","ton","town","borough","bridge","bury","wood","ditch","ford","hall","dean","leigh","dore","ston","stow","church","wich","low","way","stone","minster","ley","head","bourne","pool","worth","hill","well","hattan","burg","berg","burgh","port","stoke","haven","stable","stock","side","brook","don","den","down","nor","grove","combe","by","say","ney","chester","dale","ness","shaw","thwaite"];
townnamegen_locales_AdditionalEnglish._name_additional_english_3 = ["-on-sea"," Bay"," Market"," Beeches"," Common"," Park"," Heath"," Marsh"," Green"," Castle"," End"," Rivers"," Cross"," Bridge"," Falls"," City"," Ridge"," Springs"];
townnamegen_locales_Austrian._name_austrian_a1 = ["Bad ","Deutsch ","Gross ","Klein ","Markt ","Maria "];
townnamegen_locales_Austrian._name_austrian_a2 = ["Aus","Alten","Braun","Vösl","Mittern","Nuss","Neu","Walters","Breiten","Eisen","Feld","Mittern","Gall","Obern","Grat","Heiligen","Hof","Holla","Stein","Eber","Eggen","Enzers","Frauen","Herren","Hof","Hütt","Kaisers","Königs","Knittel","Lang","Ober","Ollers","Pfaffen","Potten","Salz","Schwarz","Stocker","Unter","Utten","Vösen","Vill","Weissen"];
townnamegen_locales_Austrian._name_austrian_a3 = ["see","bach","dorf","ach","stein","hofen","au","ach","kirch","kirchen","kreuz","brunn","siedl","markt","wang","haag"];
townnamegen_locales_Austrian._name_austrian_a4 = ["Bruck","Brunn","Gams","Grein","Ried","Faak","Zell","Spital","Kirchberg","Saal","Taferl","Wald"];
townnamegen_locales_Austrian._name_austrian_a5 = ["St. ","Sankt "];
townnamegen_locales_Austrian._name_austrian_a6 = ["Aegyd","Andrä","Georgen","Jakob","Johann","Leonhard","Marein","Lorenzen","Margarethen","Martin","Michael","Nikolai","Oswald","Peter","Pölten","Stefan","Stephan","Thomas","Veit","Wolfgang"];
townnamegen_locales_Austrian._name_austrian_f1 = [" an der "," ob der "];
townnamegen_locales_Austrian._name_austrian_f2 = ["Donau","Steyr","Lafnitz","Leitha","Thaya","Gail","Drau","Salzach","Ybbs","Traisen","Enns","Mur","Ill"];
townnamegen_locales_Austrian._name_austrian_b1 = [" am "];
townnamegen_locales_Austrian._name_austrian_b2 = ["Brenner","Dachstein","Gebirge","Grossglockner","Hausruck","Semmering","Wagram","Wechsel","Wilden Kaiser","Ziller"];
townnamegen_locales_Dutch._name_dutch_1 = ["Nieuw ","Oud ","Groot ","Zuid ","Noord ","Oost ","West ","Klein "];
townnamegen_locales_Dutch._name_dutch_2 = ["Hoog","Laag","Zuider","Zuid","Ooster","Oost","Wester","West","Hoofd","Midden","Eind","Amster","Amstel","Dord","Rotter","Haar","Til","Enk","Dok","Veen","Leidsch","Lely","En","Kaats","U","Maas","Mar","Bla","Al","Alk","Eer","Drie","Ter","Groes","Goes","Soest","Coe","Uit","Zwaag","Hellen","Slie","IJ","Grubben","Groen","Lek","Ridder","Schie","Olde","Roose","Haar","Til","Loos","Hil"];
townnamegen_locales_Dutch._name_dutch_3 = ["Drog","Nat","Valk","Bob","Dedem","Kollum","Best","Hoend","Leeuw","Graaf","Uithuis","Purm","Hard","Hell","Werk","Spijk","Vink","Wams","Heerhug","Koning"];
townnamegen_locales_Dutch._name_dutch_4 = ["e","er","el","en","o","s"];
townnamegen_locales_Dutch._name_dutch_5 = ["stad","vorst","dorp","dam","beek","doorn","zijl","zijlen","lo","muiden","meden","vliet","nisse","daal","vorden","vaart","mond","zaal","water","duinen","heuvel","geest","kerk","meer","maar","hoorn","rade","wijk","berg","heim","sum","richt","burg","recht","drecht","trecht","tricht","dricht","lum","rum","halen","oever","wolde","veen","hoven","gast","kum","hage","dijk","zwaag","pomp","huizen","bergen","schede","mere","end"];
townnamegen_locales_Finnish._name_finnish_1 = ["Hiekka","Haapa","Mylly","Sauna","Uusi","Vanha","Kesä","Kuusi","Pelto","Tuomi","Terva","Olki","Heinä","Seinä","Rova","Koivu","Kokko","Mänty","Pihlaja","Petäjä","Kielo","Kauha","Viita","Kivi","Riihi","Ääne","Niini"];
townnamegen_locales_Finnish._name_finnish_2 = ["Lappeen","Lohjan","Savon","Lapin","Pitäjän","Martin","Kuusan","Kemi","Keri","Hämeen","Kangas"];
townnamegen_locales_Finnish._name_finnish_3 = ["harju","linna","järvi","kallio","mäki","nummi","joki","kylä","lampi","lahti","metsä","suo","laakso","niitty","luoto","hovi","ranta","koski","salo"];
townnamegen_locales_German._name_german_pre = ["Bad ","Klein ","Neu "];
townnamegen_locales_German._name_german_1 = ["Alb","Als","Ander","Arns","Bruns","Bam","Biele","Cloppen","Co","Duis","Düssel","Dannen","Elb","Els","Elster","Eichen","Ems","Fahr","Falken","Flens","Frank","Frei","Freuden","Fried","Fürsten","Hahn","Ham","Harz","Heidel","Hers","Herz","Holz","Hildes","Inns","Ilsen","Ingols","Kel","Kies","Korn","Kor","Kreuz","Kulm","Langen","Lim","Lohr","Lüne","Mel","Michels","Mühl","Naum","Nest","Nord","Nort","Nien","Nidda","Nieder","Nürn","Ober","Offen","Osna","Olden","Ols","Oranien","Pader","Quedlin","Quer","Ravens","Regens","Rott","Ros","Rüssels","Saal","Saar","Salz","Schöne","Schwein","Sonder","Sonnen","Stein","Strals","Straus","Süd","Ton","Unter","Ur","Vor","Wald","War","Wert","Wester","Witten","Wolfs","Würz"];
townnamegen_locales_German._name_german_2 = ["bach","berg","brück","brücken","burg","dorf","feld","furt","hausen","haven","heim","horst","mund","münster","stadt","wald"];
townnamegen_locales_German._name_german_3_an_der = [" an der "];
townnamegen_locales_German._name_german_3_am = [" am "];
townnamegen_locales_German._name_german_4_an_der = ["Oder","Spree","Donau","Saale","Elbe"];
townnamegen_locales_German._name_german_4_am = ["Main"];
townnamegen_locales_OriginalEnglish._name_original_english_1 = ["Great ","Little ","New ","Fort "];
townnamegen_locales_OriginalEnglish._name_original_english_2 = ["Wr","B","C","Ch","Br","D","Dr","F","Fr","Fl","G","Gr","H","L","M","N","P","Pr","Pl","R","S","S","Sl","T","Tr","W"];
townnamegen_locales_OriginalEnglish._name_original_english_3 = ["ar","a","e","in","on","u","un","en"];
townnamegen_locales_OriginalEnglish._name_original_english_4 = ["n","ning","ding","d","","t","fing"];
townnamegen_locales_OriginalEnglish._name_original_english_5 = ["ville","ham","field","ton","town","bridge","bury","wood","ford","hall","ston","way","stone","borough","ley","head","bourne","pool","worth","hill","well","hattan","burg"];
townnamegen_locales_OriginalEnglish._name_original_english_6 = ["-on-sea"," Bay"," Market"," Cross"," Bridge"," Falls"," City"," Ridge"," Springs"];
townnamegen_locales_Silly._name_silly_1 = ["Binky","Blubber","Bumble","Crinkle","Crusty","Dangle","Dribble","Flippety","Google","Muffin","Nosey","Pinker","Quack","Rumble","Sleepy","Sliggles","Snooze","Teddy","Tinkle","Twister","Pinker","Hippo","Itchy","Jelly","Jingle","Jolly","Kipper","Lazy","Frogs","Mouse","Quack","Cheeky","Lumpy","Grumpy","Mangle","Fiddle","Slugs","Noodles","Poodles","Shiver","Rumble","Pixie","Puddle","Riddle","Rattle","Rickety","Waffle","Sagging","Sausage","Egg","Sleepy","Scatter","Scramble","Silly","Simple","Trickle","Slippery","Slimey","Slumber","Soggy","Sliggles","Splutter","Sulky","Swindle","Swivel","Tasty","Tangle","Toggle","Trotting","Tumble","Snooze","Water","Windy","Amble","Bubble","Cheery","Cheese","Cockle","Cracker","Crumple","Teddy","Evil","Fairy","Falling","Fishy","Fizzle","Frosty","Griddle"];
townnamegen_locales_Silly._name_silly_2 = ["ton","bury","bottom","ville","well","weed","worth","wig","wick","wood","pool","head","burg","gate","bridge"];
townnamegen_locales_Swedish._name_swedish_1 = ["Gamla ","Lilla ","Nya ","Stora "];
townnamegen_locales_Swedish._name_swedish_2 = ["Boll","Bor","Ed","En","Erik","Es","Fin","Fisk","Grön","Hag","Halm","Karl","Kram","Kung","Land","Lid","Lin","Mal","Malm","Marie","Ner","Norr","Oskar","Sand","Skog","Stock","Stor","Ström","Sund","Söder","Tall","Tratt","Troll","Upp","Var","Väster","Ängel","Öster"];
townnamegen_locales_Swedish._name_swedish_2a = ["B","Br","D","Dr","Dv","F","Fj","Fl","Fr","G","Gl","Gn","Gr","H","J","K","Kl","Kn","Kr","Kv","L","M","N","P","Pl","Pr","R","S","Sk","Skr","Sl","Sn","Sp","Spr","St","Str","Sv","T","Tr","Tv","V","Vr"];
townnamegen_locales_Swedish._name_swedish_2b = ["a","e","i","o","u","y","å","ä","ö"];
townnamegen_locales_Swedish._name_swedish_2c = ["ck","d","dd","g","gg","l","ld","m","n","nd","ng","nn","p","pp","r","rd","rk","rp","rr","rt","s","sk","st","t","tt","v"];
townnamegen_locales_Swedish._name_swedish_3 = ["arp","berg","boda","borg","bro","bukten","by","byn","fors","hammar","hamn","holm","hus","hättan","kulle","köping","lund","löv","sala","skrona","slätt","spång","stad","sund","svall","svik","såker","udde","valla","viken","älv","ås"];
townnamegen_demo_DemoForm.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : exports);
