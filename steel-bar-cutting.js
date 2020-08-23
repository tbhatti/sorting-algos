function  cutMemo(p) {
        r = [p.length+1];
        for(let i=0;i<=p.length;i++)
            r[i]=-1;                        
        return cut(p, p.length, r);
    }
    function  cut(p,n,r) {
        let q=-1;
        if(r[n]>=0)
            return r[n];
        if(n==0)
            q=0;
        else {
            for(var i=1;i<=n;i++)
                q=Math.max(q, cut(p, n-i,r)+p[i-1]);
        }
        r[n]=q;

        return q;
    }
    console.log(cutMemo([1,5,8,9,10,17,17,20,24]))